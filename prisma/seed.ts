import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
  const admin = await prisma.user.upsert({
    where: { id: '5b23eb31-b24d-41a6-a8c1-8d9c6882622b' },
    update: {},
    create: {
      fullName: 'Admin',
      createdAt: new Date,
      updatedAt: new Date,
      deletedAt: new Date,
    },
  })
  console.log({ admin })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })