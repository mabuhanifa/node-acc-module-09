const createBrand = (req, res, next) => {
  try {
    const brand = ''







  } catch (error) {
    res.status(400).json({
      status: "failed",
      error: "Couldn't create the brand",
    });
  }
};

module.exports = { createBrand };
