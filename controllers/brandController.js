const { createBrandService } = require("../services/brandServices");

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

module.exports = { createBrand };
