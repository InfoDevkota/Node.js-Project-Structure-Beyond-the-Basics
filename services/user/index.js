const User = require("../../models/user");

const createUser = (createUserDTO) => {
    let aUser = new User(createUserDTO);
    return aUser.save();
}

const getUserByEmail = (email) => {
    return User.findOne({
        email: email
    }).lean()
}

const getUserById = (userId) => {
    return User.findById(userId).lean();
}

const UserService = {
    createUser,
    getUserByEmail,
    getUserById
}

module.exports = UserService;