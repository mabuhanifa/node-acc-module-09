const Store = require("../models/Store");

const getStoresService = async () => {
  const stores = await Store.find({});
  return stores;
};

const createStoreService = async (data) => {
  const store = await Store.create(data);
  return store;
};

module.exports = { getStoresService, createStoreService };
