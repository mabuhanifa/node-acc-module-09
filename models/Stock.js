const mongoose = require("mongoose");

const validator = require("validator");

const { ObjectId } = mongoose.Schema.Types;

const stockSchema = mongoose.Schema(
  {
    productId: {
      type: ObjectId,
      required: true,
      ref: "Product",
    },
    name: {
      type: String,
      required: [true, "Please provide a name"],
      trim: true,
      unique: true,
      lowercase: true,
      minLength: [3, "Name must be at least 3 characters"],
      maxLength: [100, "Name must be less than 100 characters"],
    },
    description: {
      type: String,
      required: [true, "Please provide a description"],
    },
    price: {
      typeof: Number,
      required: [true, "Please provide a price"],
      min: [0, "Please provide a price with positive value"],
    },
    quantity: {
      type: Number,
      required: true,
      min: [0, "Please provide a quantity value"],
      message: "Quantity must be an integer value",
    },
    unit: {
      type: String,
      required: [true, "Please provide a unit"],
      enum: {
        values: ["kg", "liter", "pcs", "bag"],
        message: "unit value cannot be {VALUE}, must be kg, liter, pcs, bag",
      },
    },
    status: {
      type: String,
      required: true,
      enum: {
        values: ["in-stock", "out-of-stock", "discontinued"],
        message: "Status cannot be {VALUE}",
      },
    },
    supplier: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Supplier",
    },
    category: {
      type: String,
      required: true,
    },
    brand: {
      name: {
        type: String,
        required: true,
      },
      id: {
        type: ObjectId,
        ref: "Brand",
        required: true,
      },
    },
  },
  {
    timeStamps: true,
  }
);

productSchema.pre("save", function (next) {
  //this ->
  console.log("Before saving data");
  if (this.quantity == 0) {
    this.status = "out of stock";
  }
  next();
});

const Stock = mongoose.model("Product", stockSchema);
module.exports = Stock;
