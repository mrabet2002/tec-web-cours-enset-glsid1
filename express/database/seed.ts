const { UserSeeder } = require('./seeders/UserSeeder');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()

const userSeeder = new UserSeeder();

async function main() {
    await prisma.user.deleteMany({});
    // Seeders
    userSeeder.seed()
        .then(console.log)
        .catch(console.error);
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