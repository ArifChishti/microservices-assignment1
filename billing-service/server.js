// imports
const express = require("express");
const morgan = require("morgan");

// init express app
const app = express();

// use morgan middleware
app.use(morgan("combined"));
app.use(express.json());

// Billing -- New Service from Assignment
app.post("/billing", (req, res) => {
  console.log(req.body);
  res.send("User Billing");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
