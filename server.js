const express = require("express");
const dotenv = require("dotenv").config();
const errorHandler = require("./middleware/errorHandler");
const colors = require("colors");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const brandRoute = require("./routes/brandRoute");
app.use(cors());

const port = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Node Application Server Running");
});

app.all("*", (req, res) => {
  res.send(`No Route found`);
});
app.use("/api/v1/brand", brandRoute);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
