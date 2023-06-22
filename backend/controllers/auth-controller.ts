import expressAsyncHandler from "express-async-handler";
import { Request, Response } from "express";
import { createUserDB } from "../utils/auth-db/register-db.ts";
import { generateToken } from "../utils/auth-db/generate-token.ts";
import { findUserByToken } from "../utils/auth-db/find-user-by-token.ts";
import { updateUser } from "../utils/auth-db/update-user.ts";
import bcrypt from "bcryptjs";
import prisma from "../db.ts";

// @desc   Auth user/set token
// @route   POST /api/users/login
// @access Public
const loginUser = expressAsyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("Missing email or password");
  }

  const user = await prisma.user.findFirst({ where: { email } });
  if (user && (await bcrypt.compare(password, user.password))) {
    const { id } = user;
    const accessToken = generateToken(res, id);
    res.json({
      success: true,
      user: { id: user.id, email: user.email },
      accessToken: accessToken,
    });
  } else {
    res.send(401).json({ success: false, message: "Something went wrong" });
  }
});

// @desc   Register a new user
// @route   POST /api/users
// @access Public
const registerUser = expressAsyncHandler(
  async (req: Request, res: Response) => {
    const { email, password } = req.body;

    // Check for valid input
    if (!email || !password) {
      res.status(400);
      throw new Error("Missing email or password");
    }

    const user = await createUserDB(email, password);
    res.status(201).json({ success: true, user: user });
  }
);

// @desc   Logout user
// @route   POST /api/users/logout
// @access Public
const logoutUser = expressAsyncHandler(async (req: Request, res: Response) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: "User logged out" });
});

// @desc   Get user profile
// @route   GET /api/users/profile
// @access Private
const getUserProfile = expressAsyncHandler(
  async (req: Request, res: Response) => {
    const token = req.cookies.jwt;
    const user = await findUserByToken(token);
    res
      .status(200)
      .json({ success: true, user: { id: user.id, email: user.email } });
  }
);

// @desc   Update profile
// @route   PUT /api/users/profile
// @access Private
const updateUserProfile = expressAsyncHandler(
  async (req: Request, res: Response) => {
    const token = req.cookies.jwt;
    const user = await findUserByToken(token);

    if (req.body.password) {
      const salt = bcrypt.genSaltSync(10);
      user.password = bcrypt.hashSync(req.body.password, salt);
    }

    user.email = req.body.email ?? user.email;

    const updatedUser = await updateUser(user);
    res.status(200).json({ success: true, user: updatedUser });
  }
);

export {
  loginUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
};
