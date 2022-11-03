const Brand = require("../models/Brand");

const createBrandService = async (data) => {
  const result = await Brand.create(data);
  return result;
};

const getBrandsService = async () => {
  const brands = await Brand.find({}).select("-products -suppliers");
  return brands;
};

module.exports = { createBrandService, getBrandsService };
