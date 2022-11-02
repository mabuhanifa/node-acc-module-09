const Brand = require("../models/Brand");

const createBrandService = async (data) => {
  const result = await Brand.create(data);
  return result;
};

module.exports = { createBrandService };
