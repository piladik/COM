import prisma from "../../db.ts";
import { IUser, prismaUserPreview } from "../types/user-types.ts";

const updateUser = async (user: IUser) => {
  const updatedUser = await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      email: user.email,
      password: user.password,
    },
    select: prismaUserPreview,
  });

  return updatedUser;
};

export { updateUser };
