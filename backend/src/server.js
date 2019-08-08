const express = require("express");
const mongoose = require("mongoose");

const routes = require("./routes");

const port = 3333;
const server = express();
mongoose.connect(
  "mongodb+srv://aryastark:got159@cluster0-7z6x9.mongodb.net/tindev?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

// this method 'use' its for add a file config in another file
server.use(express.json()); // this is for use json with express
server.use(routes);

server.listen(port, () => console.log(`Server running in localhost:${port}/`));
