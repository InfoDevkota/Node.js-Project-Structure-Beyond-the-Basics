const userAuth = (req, res, next) => {
    // TODO get the JWT token
    // verify the token
    // if invalid return 401 unauthorized
    // docode the token and get the user

    let user = {}

    req.user = user;

    next();

}

module.exports = userAuth;