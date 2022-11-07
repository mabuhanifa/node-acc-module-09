const { getSuppliersService } = require("../services/supplierServices");

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

module.exports = { getSuppliers };
