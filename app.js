const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const brandRouter = require("./routes/brandRoute");
const productRouter = require("./routes/productRoute");
const supplierRouter = require("./routes/supplierRoute");
const stockRouter = require("./routes/stockRoute");

//middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});

//routes
app.use("/api/v1/brand", brandRouter);
app.use("/api/v1/product", productRouter);
app.use("/api/v1/supplier", supplierRouter);
app.use("/api/v1/supplier", stockRouter);

module.exports = app;
