const {
  getSuppliersService,
  createSupplierService,
} = require("../services/supplierServices");

const createSupplier = async (req, res) => {
  try {
    const result = await createSupplierService(req.body);

    res.status(200).json({
      status: "success",
      message: "Successfully created the supplier",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: "fail",
      error: "Couldn't create the supplier",
    });
  }
};
const getSuppliers = async (req, res) => {
  try {
    const suppliers = await getSuppliersService();
    res.status(200).json({
      status: "success",
      data: suppliers,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: "fail",
      error: "Couldn't get the suppliers",
    });
  }
};

module.exports = { getSuppliers, createSupplier };
