const express = require('express');

const apiRoutes = require('./api');

const router = express.Router();

router.get("/", (req, res, next) => {
    res.status(200).json({
        message: "Hello World"
    })
})

router.use('/api', apiRoutes)

router.use("/*", (req, res, next) => {
    res.status(404).json({
        message: "Not Found."
    })
})

module.exports = router;