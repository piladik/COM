import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // ... you will write your Prisma Client queries here
  await prisma.deposit.create({
    data: {
      type: "salary",
      amount: 30000,
      cardId: "1609256f-e9d4-4ae6-b19b-55cdd182c123",
    },
  });

  const allUsers = await prisma.deposit.findMany();

  console.dir(allUsers, { depth: null });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
