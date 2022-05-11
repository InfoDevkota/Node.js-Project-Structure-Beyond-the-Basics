const express = require('express');

const userController = require('../../controllers/user');
const userAuth = require('../../middleware/userAuth');

const router = express.Router();

router.post('/', userController.postCreateUser);
router.post('/login', userController.postUserLogin);

router.get("/me", userAuth, userController.getUserProifle)

module.exports = router;