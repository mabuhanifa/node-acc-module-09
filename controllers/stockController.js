const { getStocksService } = require("../services/stockServices");

const getStocks = async (req, res, next) => {
  try {
    const stocks = await getStocksService();
    res.status(200).json({
      status: "success",
      data: stocks,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "can't get the data",
      error: error.message,
    });
  }
};

module.exports  = { getStocks };