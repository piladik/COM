import { Prisma } from "@prisma/client";

// Equals to IUser interface
export const prismaUser = Prisma.validator<Prisma.UserSelect>()({
  id: true,
  email: true,
  password: true,
});

// Equals to TPreviewUser type
export const prismaUserPreview = Prisma.validator<Prisma.UserSelect>()({
  id: true,
  email: true,
});
