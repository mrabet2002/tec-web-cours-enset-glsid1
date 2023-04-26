class User {

    constructor({ name, email, password }) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.active = false;
    }
}

module.exports = { User };