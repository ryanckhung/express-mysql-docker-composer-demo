"use strict";

const express = require("express");

// Constants
const PORT = 8080;

// App
const app = express();
app.get("/", (req, res) => {
  //res.send("Hello World");
  res.json({ data: "Hello World!" });
});

app.listen(PORT);
console.log(`Server is up at ${PORT}`);
