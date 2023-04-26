export class UserController {

    constructor(prisma) {
        this.prisma = prisma
    }

    async createUser(data) {
        const createdUser = await this.prisma.user.create({
            data
        })
        return createdUser;
    }

    async getAll(){
        return await this.prisma.user.findMany()
    }
}