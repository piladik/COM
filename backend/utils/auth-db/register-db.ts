import prisma from "../../db.ts";
import bcrypt from "bcryptjs";

async function createUserDB(email: string, password: string) {
  const salt = bcrypt.genSaltSync(10);
  const user = await prisma.user.create({
    data: {
      email,
      password: bcrypt.hashSync(password, salt),
    },
  });
  return user;
}

export { createUserDB };
