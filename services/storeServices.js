const Store = require("../models/Store");

const getStoresService = async () => {
  const stores = await Store.find({});
  return stores;
};

module.exports = { getStoresService };
