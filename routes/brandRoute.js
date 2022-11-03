const express = require("express");

const {
  createBrand,
  getBrands,
  getBrandById,
} = require("../controllers/brandController");

const router = express.Router();

router.route("/").post(createBrand).get(getBrands);

router.route("/:id").get(getBrandById);

module.exports = router;
