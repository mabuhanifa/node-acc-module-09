const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const colors = require("colors");
const cors = require("cors");
const mongoose = require("mongoose");
const brandRoute = require("./routes/brandRoute");
const app = require("./app");
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

// database connection
// mongoose
//   .connect(process.env.DATABASE, {
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
//   })
//   .then(() => {
//     console.log(`Database connection is successful 🛢`.red.bold);
//   });

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
