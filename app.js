const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(express.json());
app.use(cors());

const productRoute = require("./routes");
const brandRoute = require("./routes/brandRoute");

app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});

app.use("/api/v1/product", productRoute);
app.use("/api/v1/brand", brandRoute);

module.exports = app;
