import Blacklist from "../models/blacklist.model.js";
import User from "../models/user.model.js";
import jwt from "jsonwebtoken";

// User Registration
export const registerUser = async (req, res) => {
  const { name, email, password, ...h } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const userExists = await User.findOne({ email });
    if (userExists)
      return res.status(400).json({ message: "User already exists" });

    const newUser = await User.create({ email, password, name, ...h });
    const userResponse = newUser.toObject();
    delete userResponse.password;

    res.status(201).json({
      message: "User registered successfully",
      newUser: { user: userResponse },
    });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// User Login
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email }).select("+password");
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await user.comparePassword(password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.json({
      message: "User Logged in Successfully",
      accessToken,
      refreshToken,
    });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

export const profileUser = async (req, res) => {
  try {
    const userProfile = await User.findById(req.user?._id).select(
      "-_id -role -createdAt -updatedAt -__v"
    );
    if (!userProfile) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ message: "Profile", userProfile });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "server Error", error: error.message });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const { password, email, name } = req.body;
    const user = await User.findById(req.user?._id);
    if (!user) return res.status(404).json({ message: "User not found" });

    if (email) user.email = email;
    if (name) user.name = name;
    if (password) user.password = password;

    const updatedUser = await user.save();
    const userResponse = updatedUser.toObject();
    delete userResponse.password;
    return res
      .status(200)
      .json({ message: "Profile updated successfully", userResponse });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "server Error", error: error.message });
  }
};

export const refreshAccessToken = async (req, res) => {
  try {
    const incomingRefreshToken =
      req.cookies?.refreshToken || req.body.refreshToken;
    if (!incomingRefreshToken) {
      return res.status(401).json({ message: "No refresh token provided" });
    }
    // console.log("Incoming Refresh Token:", incomingRefreshToken);

    const decodedToken = jwt.verify(
      incomingRefreshToken,
      process.env.REFRESH_TOKEN_SECRET
    );
    // console.log(decodedToken?._id);
    const user = await User.findById(decodedToken?._id);
    if (user?._id != decodedToken?._id) {
      return res.status(403).json({ message: " Invalid refresh token" });
    }
    const newRefreshToken = user.generateRefreshToken();
    const newAccessToken = user.generateAccessToken();
    res.cookie("refreshToken", newRefreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    return res.status(200).json({ newAccessToken, newRefreshToken });
  } catch (error) {
    return res.status(403).json({ message: "Something went wrong" });
  }
};

export const logoutUser = async (req, res) => {
  try {
    const token = req.header("Authorization")?.split(" ")[1];
    if (token) {
      await Blacklist.create({ token });
    }

    res.clearCookie("refreshToken", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
    });
    return res.status(200).json({ message: "Logged out successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
