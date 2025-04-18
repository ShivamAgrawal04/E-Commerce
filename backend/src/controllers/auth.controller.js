import Blacklist from "../models/blacklist.model.js";
import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";

// User Registration
export const registerUser = asyncHandler(async (req, res) => {
  const { email, password, name, ...h } = req.body;
  if (!name || !email || !password) {
    throw new ApiError(400, "All fields are required");
  }

  const userExists = await User.findOne({ email });
  if (userExists)
    throw new ApiError(400, "User already exists with this email");

  const newUser = await User.create({
    email,
    password,
    name,
    // isVerified:true,
    ...h,
  });
  const userResponse = newUser.toObject();
  delete userResponse.password;

  res
    .status(201)
    .json(
      new ApiResponse(
        201,
        { newUser: { user: userResponse } },
        "User registered successfully"
      )
    );
});

// User Login
export const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select("+password");
  if (!user) throw new ApiError(400, "Invalid credentials");

  const isMatch = await user.comparePassword(password);
  if (!isMatch) throw new ApiError(400, "Invalid credentials");

  const accessToken = user.generateAccessToken();
  const refreshToken = user.generateRefreshToken();

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "Strict",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
  res.cookie("accessToken", accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "Strict",
    maxAge: 15 * 60 * 1000,
  });

  const userResponse = user.toObject();
  delete userResponse.password;

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        { user: userResponse },
        "User Logged in Successfully"
      )
    );
});

export const profileUser = asyncHandler(async (req, res) => {
  const userProfile = await User.findById(req.user?._id);
  if (!userProfile) {
    throw new ApiError(404, "User not found");
  }
  return res.status(200).json(new ApiResponse(200, { userProfile }, "Profile"));
});

export const updateProfile = asyncHandler(async (req, res) => {
  const { email, name } = req.body;
  const user = await User.findById(req.user?._id);
  if (!user) throw new ApiError(404, "User not found");

  const updates = {};
  if (email) updates.email = email;
  if (name) updates.name = name;

  let updatedUser = {};
  if (Object.keys(updates).length > 0) {
    Object.assign(user, updates);
    updatedUser = await user.save(); // ✅ Only saves if there are changes
  }
  return res
    .status(200)
    .json(
      new ApiResponse(200, { updatedUser }, "Profile updated successfully")
    );
});

export const updatePassword = asyncHandler(async (req, res) => {
  const { oldPassword, newPassword } = req.body;
  if (!oldPassword || !newPassword)
    throw new ApiError(400, "All fields are required");
  const user = await User.findById(req.user?._id).select("+password");
  if (!user) throw new ApiError(404, "User not found");
  const isMatch = await user.comparePassword(oldPassword);
  if (!isMatch) throw new ApiError(400, "Invalid credentials");
  user.password = newPassword;
  await user.save();
  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Password updated successfully"));
});

export const refreshAccessToken = asyncHandler(async (req, res) => {
  const incomingRefreshToken = req.cookies?.refreshToken;
  if (!incomingRefreshToken)
    throw new ApiError(401, "No refresh token provided");

  // console.log("Incoming Refresh Token:", incomingRefreshToken);

  const decodedToken = jwt.verify(
    incomingRefreshToken,
    process.env.REFRESH_TOKEN_SECRET
  );
  // console.log(decodedToken?._id);
  const user = await User.findById(decodedToken?._id);
  if (user?._id != decodedToken?._id)
    throw new ApiError(403, "Invalid refresh token");
  const newRefreshToken = user.generateRefreshToken();
  const newAccessToken = user.generateAccessToken();
  res.cookie("refreshToken", newRefreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "Strict",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
  res.cookie("accessToken", newAccessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "Strict",
    maxAge: 15 * 60 * 1000,
  });
  return res
    .status(200)
    .json(new ApiResponse(200, { newAccessToken, newRefreshToken }));
});

export const logoutUser = asyncHandler(async (req, res) => {
  // const token = req.header("Authorization")?.split(" ")[1];
  // if (token) {
  //   await Blacklist.create({ token });
  // }

  res.clearCookie("refreshToken", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "Strict",
  });
  res.clearCookie("accessToken", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "Strict",
  });
  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Logged out successfully"));
});

export const checkAuthStatus = asyncHandler(async (req, res) => {
  const { accessToken, refreshToken } = req.cookies;

  if (!refreshToken) throw new ApiError(400, "refresh Token not found");
  if (!accessToken) {
    const decodedToken = jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET
    );

    const user = await User.findById(decodedToken?._id);
    if (!user) throw new ApiError(400, "invalid refresh token");
    const newRefreshToken = user.generateRefreshToken();
    const newAccessToken = user.generateAccessToken();
    res.cookie("refreshToken", newRefreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
      maxAge: 15 * 60 * 1000,
    });
    res.cookie("accessToken", newAccessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
      maxAge: 15 * 60 * 1000,
    });
    return res.json({ user });
  }
  res.json("All things are good");
});
