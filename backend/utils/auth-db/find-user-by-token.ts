import prisma from "../../db.ts";
import jwt, { JwtPayload } from "jsonwebtoken";
import { prismaUser } from "../types/user-types.ts";

const findUserByToken = async (accessToken: string) => {
  const decoded = jwt.verify(
    accessToken,
    process.env.ACCESS_TOKEN_SECRET!
  ) as JwtPayload;

  const user = await prisma.user.findFirstOrThrow({
    where: {
      id: decoded.userId,
    },
    select: prismaUser,
  });

  return user;
};

export { findUserByToken };
