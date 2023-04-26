const { User } = require('../../models/User.js');
const { faker } = require('@faker-js/faker');

class UserFaker {
    fakeMany(numberOfUsers) {
        let users = (new Array(numberOfUsers))
            .fill(null)
            .map(user => {
                // Generate random values
                let firstName = faker.name.firstName();
                let lastName = faker.name.lastName();
                let email = faker.internet.email(firstName, lastName);
                // Create the user
                return new User(
                    {
                        name: firstName + lastName,
                        email: email,
                        password: '123456'
                    }
                )
            });
        return users;
    }
}

module.exports = { UserFaker };