const {
  getSuppliersService,
  createSupplierService,
  getSupplierByIdService,
  updateSupplierService,
} = require("../services/supplierServices");


/**
 
 @api 
 @method ->POST
 @url  /api/v1/supplier

**/

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

/**
 
 @api 
 @method ->GET
 @url  /api/v1/supplier

**/

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

/**
 
 @api 
 @method ->POST
 @url  /api/v1/supplier/:id

**/
const getSupplierById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const supplier = await getSupplierByIdService(id);

    if (!supplier) {
      return res.status(400).json({
        status: "fail",
        error: "Couldn't find a supplier with this id",
      });
    }

    res.status(200).json({
      status: "success",
      data: supplier,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: "fail",
      error: "Couldn't get the brands",
    });
  }
};

/**
 
 @api 
 @method ->PATCH
 @url  /api/v1/supplier

**/

const updateSupplier = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await updateSupplierService(id, req.body);

    console.log(result);

    if (!result.modifiedCount) {
      return res.status(400).json({
        status: "fail",
        error: "Couldn't update the supplier with this id",
      });
    }

    res.status(200).json({
      status: "success",
      message: "Successfully updated the supplier",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: "fail",
      error: "Couldn't update the brand",
    });
  }
};

module.exports = {
  getSuppliers,
  createSupplier,
  getSupplierById,
  updateSupplier,
};
