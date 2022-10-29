const mongoose = require("mongoose");

const brandSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "Please provide a brand name"],
    maxLength: 100,
    unique: true,
  },
});
