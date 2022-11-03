const Brand = require("../models/Brand");

const createBrandService = async (data) => {
  const result = await Brand.create(data);
  return result;
};

const getBrandsService = async () => {
  const brands = await Brand.find({}).select("-products -suppliers");
  return brands;
};
const getBrandByIdService = async (id) => {
  const brand = await Brand.findById({ _id: id });
  return brand;
};

module.exports = { createBrandService, getBrandsService, getBrandByIdService };
