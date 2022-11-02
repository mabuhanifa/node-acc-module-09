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
    unit: {
      type: String,
      required: [true, "Please provide a unit"],
      enum: {
        values: ["kg", "liter", "pcs", "bag"],
        message: "unit value cannot be {VALUE}, must be kg, liter, pcs, bag",
      },
    },
    imageURLs: [
      {
        type: String,
        required: true,
        validate: {
          validator: (value) => {
            if (!Array.isArray(value)) {
              return false;
            }
            //validating every array elements
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
    ],
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

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
