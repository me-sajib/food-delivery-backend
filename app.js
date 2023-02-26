const express = require('express');
const cors = require('cors');
const app = express();
require("./config/db");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

module.exports = app;