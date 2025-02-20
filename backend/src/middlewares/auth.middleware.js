// middleware/authMiddleware.js
import jwt from "jsonwebtoken";
import Blacklist from "../models/blacklist.model.js";

export const verifyToken = async (req, res, next) => {
  try {
    const token =
      req.cookies?.accessToken || req.header("Authorization")?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    const blacklistToken = await Blacklist.findOne({ token });

    if (token === blacklistToken?.token) {
      return res.status(401).json({ message: "Token is expired" });
    }
    const decode = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.user = decode;
    next();
  } catch (error) {
    return res.status(500).json({ message: "Error verifying token" });
  }
};

export const checkRole = (allowedRoles) => {
  return (req, res, next) => {
    const { role } = req.user;
    if (!allowedRoles.includes(role)) {
      return res.status(403).json({ message: "Forbidden" });
    }
    next();
  };
};
