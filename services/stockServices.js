const Stock = require("../models/Stock");

const getStocksService = async () => {
  const stocks = await Stock.find({});
  return stocks;
};

module.exports = { getStocksService };
