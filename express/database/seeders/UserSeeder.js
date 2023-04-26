const { PrismaClient } = require('@prisma/client');
const { UserFaker } = require('../fakers/UserFaker.js');
const prisma = new PrismaClient()

class UserSeeder {
    constructor() {
        this.userFaker = new UserFaker()
    }

    async seed() {
        let users = this.userFaker.fakeMany(10)
        console.log(users);
        return await prisma.user.createMany({ data: users })
    }
}

module.exports = { UserSeeder };