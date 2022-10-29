const mongoose = require("mongoose");

const validator = require("validator");

const { ObjectId } = mongoose.Schema.Types;

const productSchema = mongoose.Schema(
  {
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
    unit: {
      type: String,
      required: [true, "Please provide a unit"],
      enum: {
        values: ["kg", "liter", "pcs", "bag"],
        message: "unit value cannot be {VALUE}, must be kg,liter,pcs",
      },
    },
    imageURLs: {
      type: String,
      required: true,
      validate: {
        validator: (value) => {
          if (!Array.isArray(value)) {
            return false;
          }
          let isValid = true;
          value.forEach((url) => {
            if (validator.isUrl(url)) {
              isValid = false;
            }
          });
          return isValid;
        },
        message: "Please provide valid image urls",
      },
    },
    quantity: {
      type: Number,
      required: true,
      min: [0, "Please provide a quantity value"],
      validate: {
        validator: (value) => {
          const isInteger = Number.isInteger(value);
          if (isInteger) {
            return true;
          } else {
            return false;
          }
        },
      },
      message: "Quantity must be an integer value",
    },
    status: {
      type: String,
      required: true,
      enum: {
        value: ["in-stock", "out-of-stock", "discontinued"],
        message: "Status cannot be {VALUE}",
      },
    },
    supplier: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Supplier",
    },
    categories: [
      {
        name: {
          type: String,
          required: true,
        },
        _id: mongoose.Schema.Types.ObjectId,
      },
    ],
  },
  {
    timeStamps: true,
  }
);
