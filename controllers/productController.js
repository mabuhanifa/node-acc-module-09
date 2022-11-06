const { getProductsServices } = require("../services/productServices");

const getProducts = async (req, res, next) => {
  try {
    const products = await getProductsServices();

    res.status(200).json({
      status: "success",
      data: products,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Can't get the stores",
      error: error.message,
    });
  }
};

module.exports = { getProducts };
