const mongoose = require('mongoose');

const user = process.env.DB_USER;
const pass = process.env.DB_PASSWORD;
const database = process.env.DB_NAME;
const serverName = process.env.DB_SERVER_NAME;

module.exports = {
  init: () => {
    mongoose
      .connect(
        `mongodb+srv://${user}:${pass}@${serverName}/${database}?retryWrites=true&w=majority`
      )
      .then((res) => console.log(`Connection Succesful ${res}`))
      .catch((res) => console.log(`Error in DB connection ${res}`));
  },
};
