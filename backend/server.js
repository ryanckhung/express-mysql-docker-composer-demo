"use strict";
require("dotenv").config();
const express = require("express");
const getAllUsers = require("./database.js");

// Constants
const PORT = 8080;

// App
const app = express();

app.get("/", (req, res) => {
  res.json({ data: "Hello World!" });
});

app.get("/users", (req, res) => {
  console.log("get user");
  getAllUsers().then((users) => {
    res.json({ data: users });
  });
});

app.listen(PORT);
console.log(`${process.env.MESSAGE} Server is up at ${PORT}`);
