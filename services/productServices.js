const Product = require("../models/Product");

const getProductsServices = async () => {
  const products = await Product.find({});
  return products;
};

const createProductService = async (data) => {
  const product = await Product.create(data);
  return product;
};
const getProductByIdService = async (id) => {
  const product = await Product.find({ _id: id });
  return product;
};


module.exports = { getProductsServices, createProductService,getProductByIdService };
