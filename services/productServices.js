const Product = require("../models/Product");

const getProductsServices = async () => {
  const products = await Product.find({});
  return products;
};

const createProductService = async (data) => {
  const product = await Product.create(data);
  return product;
};


module.exports = { getProductsServices, createProductService };
