const { PrismaClient } = require('@prisma/client');

class UserController {

    constructor() {
        this.prisma = new PrismaClient()
    }

    async getAll() {
        return await this.prisma.user.findMany({})
    }

    async create(request) {
        const createdUser = await this.prisma.user.create({
            data: this.getUserFromRequest(request)
        })
        return createdUser;
    }

    async update(userId, request) {
        await this.prisma.user.update({
            where: { id: userId },
            data: this.getUserFromRequest(request)
        })
    }

    async delete(userId) {
        return await this.prisma.user.delete({
            where: { id: Number(userId) }
        })
    }

    getUserFromRequest(request){
        return {
            name: request.body.name,
            email: request.body.email,
            password: request.body.password
        };
    }
}

module.exports = {
    UserController
};