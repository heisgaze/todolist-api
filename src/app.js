const express = require("express");
const dotenv = require("dotenv");
const todoRoutes = require('./routes/todoRouter');

dotenv.config(); 

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', todoRoutes); 

module.exports = app;
