const Supplier = require("../models/Supplier");

const getSuppliersService = async () => {
  const supplier = await Supplier.find({});
  return supplier;
};

const createSupplierService = async (data) => {
  const result = await Supplier.create(data);
  return result;
};
module.exports = { getSuppliersService, createSupplierService };
