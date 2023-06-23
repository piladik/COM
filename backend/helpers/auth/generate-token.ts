import jwt from "jsonwebtoken";
import { Response } from "express";

const generateToken = (res: Response, userId: string) => {
  const accessToken = jwt.sign({ userId }, process.env.ACCESS_TOKEN_SECRET!, {
    expiresIn: "5m",
  });

  res.cookie("jwt", accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict",
    maxAge: 5 * 60 * 1000,
  });

  return accessToken;
};

export { generateToken };
