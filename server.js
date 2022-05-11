const app = require('./app');
const mongooseConnect = require('./db/mongoose');

const PORT = process.env.PORT || 3000;

mongooseConnect().then(db => {
    app.listen(PORT, () => {
        console.log("Server Started at", PORT);
    })
})