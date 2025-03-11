import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";
import getDataUri from "../utils/getDataUri.js";
import cloudinary from "../config/cloudinary.js";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    return next(errorHandler(400, "All fields are required"));
  }

  let user = await User.findOne({ email });
  if (user) return next(errorHandler(404, "User already exist"));
  const hashedPassword = bcrypt.hashSync(password, 10);

  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    res.status(201).json("Signup successful");
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password || email === "" || password === "") {
    return next(errorHandler(400, "All fields are required"));
  }

  try {
    const validUser = await User.findOne({ email });
    if (!validUser) {
      return next(errorHandler(404, "User not found"));
    }
    const validPassword = bcrypt.compareSync(password, validUser.password);
    if (!validPassword) {
      return next(errorHandler(400, "Invalid password"));
    }
    const token = jwt.sign(
      { id: validUser._id, isAdmin: validUser.isAdmin },
      process.env.JWT_SECRET
    );

    const { password: pass, ...rest } = validUser._doc;

    res
      .status(200)
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .json(rest);
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    let updateFields = {};

    if (password) {
      if (password.length < 6) {
        return next(
          errorHandler(400, "Password must be at least 6 characters")
        );
      }
      updateFields.password = bcrypt.hashSync(password, 10);
    }

    if (username) {
      if (username.length < 7 || username.length > 20) {
        return next(
          errorHandler(400, "Username must be between 7 and 20 characters")
        );
      }
      if (username.includes(" ")) {
        return next(errorHandler(400, "Username cannot contain spaces"));
      }
      if (username !== username.toLowerCase()) {
        return next(errorHandler(400, "Username must be lowercase"));
      }
      if (!username.match(/^[a-zA-Z0-9]+$/)) {
        return next(
          errorHandler(400, "Username can only contain letters and numbers")
        );
      }

      const existingUser = await User.findOne({ username });
      if (existingUser && existingUser._id.toString() !== req.user.id) {
        return next(errorHandler(400, "Username is already taken"));
      }

      updateFields.username = username;
    }

    if (email) {
      if (!email.match(/^\S+@\S+\.\S+$/)) {
        return next(errorHandler(400, "Invalid email format"));
      }

      const existingEmailUser = await User.findOne({ email });
      if (
        existingEmailUser &&
        existingEmailUser._id.toString() !== req.user.id
      ) {
        return next(errorHandler(400, "Email is already in use"));
      }

      updateFields.email = email;
    }

    if (req.file) {
      const dataUri = getDataUri(req.file);
      const cloudRes = await cloudinary.uploader.upload(dataUri, {
        folder: "user_uploads",
      });
      updateFields.profilePicture = cloudRes.secure_url;
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.user.id,
      { $set: updateFields },
      { new: true }
    );

    if (!updatedUser) {
      return next(errorHandler(404, "User not found"));
    }

    const { password: _, ...rest } = updatedUser._doc;
    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  if (!req.user.isAdmin && req.user.id !== req.params.userId) {
    return next(errorHandler(403, "You are not allowed to delete this user"));
  }
  try {
    await User.findByIdAndDelete(req.params.userId);
    res.status(200).json("User has been deleted");
  } catch (error) {
    next(error);
  }
};

export const signout = (req, res, next) => {
  try {
    res
      .clearCookie("access_token")
      .status(200)
      .json("User has been signed out");
  } catch (error) {
    next(error);
  }
};

export const getUsers = async (req, res, next) => {
  if (!req.user.isAdmin) {
    return next(errorHandler(403, "You are not allowed to see all users"));
  }
  try {
    const startIndex = parseInt(req.query.startIndex) || 0;
    const limit = parseInt(req.query.limit) || 9;
    const sortDirection = req.query.sort === "asc" ? 1 : -1;
    console.log(startIndex, limit, sortDirection);
    const users = await User.find()
      .sort({ createdAt: sortDirection })
      .skip(startIndex)
      .limit(limit);

    const usersWithoutPassword = users.map((user) => {
      const { password, ...rest } = user._doc;
      return rest;
    });

    const totalUsers = await User.countDocuments();

    const now = new Date();

    const oneMonthAgo = new Date(
      now.getFullYear(),
      now.getMonth() - 1,
      now.getDate()
    );
    const lastMonthUsers = await User.countDocuments({
      createdAt: { $gte: oneMonthAgo },
    });

    res.status(200).json({
      users: usersWithoutPassword,
      totalUsers,
      lastMonthUsers,
    });
  } catch (error) {
    next(error);
  }
};

export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return next(errorHandler(404, "User not found"));
    }
    const { password, ...rest } = user._doc;
    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};
