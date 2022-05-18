require('dotenv').config();

const db = require('./mongoosedb');
const app = require('./app');
const port = process.env.PORT || 3000;

db.init();

app.listen(port, function() {
    console.log(`app running on port ${port}`)
});