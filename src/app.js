const express = require("express");
const dotenv = require("dotenv");
const todoRoutes = require('./routes/todoRouter');

dotenv.config(); // 🟢 INI UDAH CUKUP DI SINI

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', todoRoutes); // 🛣️ semua route dari todoRouter

module.exports = app;
