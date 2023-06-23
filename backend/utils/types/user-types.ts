import { Prisma } from "@prisma/client";

// Equals to prismaUser selector
export interface IUser {
  id: string;
  email: string;
  password: string;
}

// Equals to prismaUserPreview selector
export type TPreviewUser = Omit<IUser, "password">;
