import { PrismaClient } from '@prisma/client'
import { UserController } from './controllers/UserController.js';
import { User } from "./Model/User.js";


const prisma = new PrismaClient()
const userController = new UserController(prisma)

async function main() {
    // let user = new User('ahmed', 'ahmed@g.com', '123')
    // userController.createUser(user).then(console.log);
    userController.getAll().then(console.log)
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