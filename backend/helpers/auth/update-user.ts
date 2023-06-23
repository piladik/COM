import prisma from "../../db.ts";
import { IUser } from "../../utils/types/user-types.ts";
import { prismaUserPreview } from "../../utils/prisma-selectors/user-selectors.ts";

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
