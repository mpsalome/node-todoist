const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const indexRoute = require('./routers/index');
const indexTodo = require('./routers/index');

app.use('/', indexRoute);
app.use('/todos', indexTodo);

module.exports = app;