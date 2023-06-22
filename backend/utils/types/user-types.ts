import { Prisma } from "@prisma/client";
import jwt, { JwtPayload } from "jsonwebtoken";

export interface IUser {
  id: string;
  email: string;
  password: string;
}

export const prismaUser = Prisma.validator<Prisma.UserSelect>()({
  id: true,
  email: true,
  password: true,
});

export type TPreviewUser = Omit<IUser, "password">;

export const prismaUserPreview = Prisma.validator<Prisma.UserSelect>()({
  id: true,
  email: true,
});
