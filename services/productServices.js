const Product = require("../models/Product");

const getProductsServices = async () => {
  const products = await Product.find({});
  return products;
};

module.exports = { getProductsServices };
