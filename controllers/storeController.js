const { getStoresService } = require("../services/storeServices");

const getStores = async (req, res, next) => {
  try {
    const stores = await getStoresService();

    res.status(200).json({
      status: "success",
      data: stores,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Can't get the stores",
      error: error.message,
    });
  }
};
const createStore = async (req, res, next) => {};
const getStoreById = async (req, res, next) => {
  const { id } = req.params;
  try {
  } catch (error) {}
};
module.exports = { getStores, createStore, getStoreById };
