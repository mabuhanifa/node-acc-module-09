const express = require("express");

const {
  createBrand,
  getBrands,
  getBrandById,
  updateBrand,
} = require("../controllers/brandController");

const router = express.Router();

router.route("/")
.post(createBrand)
.get(getBrands);

router.route("/:id")
.get(getBrandById)
.patch(updateBrand);

module.exports = router;
