const express = require("express");
const routes = express.Router();

routes.get("/", (req, res) => {
  // ?=name${queryNameHere}
  return res.json({ message: `Servidor online ${req.query.name}` });
});

routes.post("/devs", (req, res) => {
  return res.json(req.body);
});

module.exports = routes;
