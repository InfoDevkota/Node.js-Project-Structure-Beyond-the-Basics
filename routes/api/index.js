const express = require('express');

const userRoutes = require('./user');

const router = express.Router();

router.get("/", (req, res, next) => {
    res.status(200).json({
        message: "API"
    })
})
router.use('/user', userRoutes);

module.exports = router;