const Supplier = require("../models/Supplier");

const getSuppliersService = async () => {
  const supplier = await Supplier.find({});
  return supplier;
};

module.exports = { getSuppliersService };
