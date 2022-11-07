const Supplier = require("../models/Supplier");

const getSuppliersService = async () => {
  const supplier = await Supplier.find({});
  return supplier;
};

const createSupplierService = async (data) => {
  const result = await Supplier.create(data);
  return result;
};

const getSupplierByIdService = async (id) => {
  const supplier = await Supplier.findOne({ _id: id });
  return supplier;
};
const updateSupplierService = async (id, data) => {
  const result = await Supplier.updateOne({ _id: id }, data, {
    runValidators: true,
  });
  return result;
};
module.exports = {
  getSuppliersService,
  createSupplierService,
  getSupplierByIdService,
  updateSupplierService,
};
