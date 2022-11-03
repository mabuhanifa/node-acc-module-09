const {
  createBrandService,
  getBrandsService,
  getBrandByIdService,
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
  try {
    const { id } = req.params;
    const brand = await getBrandByIdService(id);
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

module.exports = { createBrand, getBrands, getBrandById };
