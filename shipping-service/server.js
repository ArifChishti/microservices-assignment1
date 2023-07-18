// imports
const express = require("express");
const axios = require("axios");
const morgan = require("morgan");

// init express app
const app = express();

// use morgan middleware
app.use(morgan("combined"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

// ! SHIPPING OPERATIONS
app.get("/shipping", async (req, res) => {
  const billingUrl = 'http://billing-service:5000/billing';
  const response = await axios.post(billingUrl,req.body);
  console.log(response.status);
  res.send("GET SHIPPING");
});

app.post("/shipping", (req, res) => {
  console.log(req.body);
  res.send("POST SHIPPING");
});

app.put("/shipping", (req, res) => {
  res.send("PUT SHIPPING");
});

app.delete("/shipping", (req, res) => {
  res.send("DELETE SHIPPING");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
