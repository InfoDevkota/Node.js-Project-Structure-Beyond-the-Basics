const UserDTO = require("../../models/user/user-dto");

const UserService = require("../../services/user");

const postCreateUser = async (req, res, next) => {

    let value = UserDTO.createUserDTO.validate(req.body, {
        abortEarly: false
    })

    if (value.error) {
        return res.status(422).json({
            message: "Validation Error",
            error: value.error
        });
    }

    value = value.value;

    // TODO make sure that you hash the password before saving it to the DB
    // let hashedPass = someHashFunction(value.password);
    // value.password = hashedPass

    let user = await UserService.createUser(value);

    res.status(200).json({
        message: "User Created",
        user: user
    })
}

const postUserLogin = async (req, res, next) => {
    let email = req.body.email;
    let password = req.body.password;

    let user = await UserService.getUserByEmail(email);

    if (!user) {
        return res.status(401).json({
            message: "email and password did not match"
        })
    }

    // TODO compare the hashed password
    if (user.password != password) {
        return res.status(401).json({
            message: "email and password did not match"
        })
    }

    // let's create the JWT token here

    res.status(200).json({
        message: "Login succeed.",
        token: "the token"
    })

}

const getUserProifle = async (req, res, next) => {
    let userId = req.user._id;

    let user = await UserService.getUserById(userId);

    res.status(200).json({
        message: "User's Profile",
        user: user
    })
}

const userController = {
    postCreateUser,
    postUserLogin,
    getUserProifle
};

module.exports = userController