const express = require("express");
const db = require("./knex.js");

const app = express();

app.use(express.static(path.resolve(__dirname, "..", "build")));