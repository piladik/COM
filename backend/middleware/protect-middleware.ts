import jwt, { JwtPayload } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import expressAsyncHandler from "express-async-handler";
import prisma from "../db.ts";

const protectMiddleware = expressAsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.jwt;

    if (token) {
      try {
        const { id } = jwt.verify(
          token,
          process.env.ACCESS_TOKEN_SECRET!
        ) as JwtPayload;
        const foundUser = await prisma.user.findFirst({
          where: {
            id,
          },
        });
        if (foundUser) {
          req.headers = { authorization: `Bearer ${token}` };
          next();
        }
      } catch (error) {
        res.status(401).json({ success: false, message: "Invalid token" });
      }
    } else {
      res.status(401).json({ success: false, message: "Missing access token" });
    }
  }
);
export { protectMiddleware };
