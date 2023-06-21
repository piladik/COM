import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      id: "5ab2dc2f-df8f",
      email: "alice@prisma.io",
      password: "sha256sha",
    },
  });

  await prisma.card.create({
    data: {
      id: "57544d00-465f",
      name: "sber",
      balance: 0,
      userId: "5ab2dc2f-df8f",
    },
  });

  await prisma.deposit.create({
    data: {
      type: "salary",
      amount: 30000,
      cardId: "57544d00-465f",
    },
  });
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
