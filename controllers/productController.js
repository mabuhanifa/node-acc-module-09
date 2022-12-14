const {
  getProductsServices,
  createProductService,
  getProductByIdService,
} = require("../services/productServices");

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
      message: "Could't get the products",
      error: error.message,
    });
  }
};

const createProduct = async (req, res, next) => {
  try {
    const result = await createProductService(req.body);

    res.status(200).json({
      status: "success",
      message: "Product created successfully!",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Couldn't create product",
      error: error.message,
    });
  }
};

const getProductById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const products = await getProductByIdService(id);

    res.status(200).json({
      status: "success",
      data: products,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Can't get the product",
      error: error.message,
    });
  }
};


module.exports = { getProducts, createProduct, getProductById };
