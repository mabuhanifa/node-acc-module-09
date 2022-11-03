const {
  createBrandService,
  getBrandsService,
  getBrandByIdService,
  updateBrandService,
} = require("../services/brandServices");

/**
 @api 
 @method ->POST
 @url  /api/v1/brand

**/

const createBrand = async (req, res, next) => {
  try {
    const result = await createBrandService(req.body);

    res.status(200).json({
      status: "success",
      message: "Successfully created the brand",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      error: "Couldn't create the brand",
    });
  }
};

const getBrands = async (req, res, next) => {
  try {
    const brands = await getBrandsService();
    res.status(200).json({
      status: "success",
      data: brands,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      error: "Couldn't get the brand",
    });
  }
};

const getBrandById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const brand = await getBrandByIdService(id);

    if (!brand) {
      return res.status(400).json({
        status: "fail",
        error: "Could not find brand with this ID.",
      });
    }
    res.status(200).json({
      status: "success",
      data: brand,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      error: "Couldn't get the brand",
    });
  }
};

const updateBrand = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await updateBrandService(id, req.body);
    console.log(result);
    if (!result.modifiedCount) {
      return res.status(400).json({
        status: "fail",
        error: "Could not update the brand .",
      });
    }
    res.status(200).json({
      status: "success",
      message: "successfully updated the brand",
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      error: "Couldn't get the brand",
    });
  }
};

module.exports = { createBrand, getBrands, getBrandById, updateBrand };
