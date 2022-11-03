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
  const brand = await Brand.findOne({ _id: id });
  return brand;
};

const updateBrandService = async (id, data) => {
  const result = await Brand.updateOne({ _id: id }, data, {
    runValidators: true,
  });
  return result;
};

module.exports = {
  createBrandService,
  getBrandsService,
  getBrandByIdService,
  updateBrandService,
};
