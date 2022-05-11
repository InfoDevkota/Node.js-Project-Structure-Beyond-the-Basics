const mongoose = require('mongoose');

const connect = () => {
    let mongoURL;

    // mongoURL = 'mongodb://user:password@mongo:27017/project?authSource=admin'
    mongoURL = 'mongodb://localhost/project'

    return mongoose
        .connect(mongoURL)
        .then(result => {
            console.log("DB Connected")
            return result;
        })
        .catch(error => {
            console.log("Error");
            console.log(error.toString());
            setTimeout(() => {
                console.log("Reconnecting to Database.");
                connect();
            }, 30000)
        })
}

module.exports = connect;