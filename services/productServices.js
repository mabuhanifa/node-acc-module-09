const Brand = require("../models/Brand");
const Product = require("../models/Product");

const getProductsServices = async () => {
  const products = await Product.find({});
  return products;
};

const createProductService = async (data) => {
  const product = await Product.create(data);
  const { _id: productId, brand } = product;
  const res = await Brand.updateOne(
    { _id: brand.id },
    { $push: { products: productId } }
  );
  console.log(res);
  return product;
};
const getProductByIdService = async (id) => {
  const product = await Product.find({ _id: id });
  return product;
};

module.exports = {
  getProductsServices,
  createProductService,
  getProductByIdService,
};
