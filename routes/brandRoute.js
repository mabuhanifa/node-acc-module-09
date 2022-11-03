const express = require("express");

const { createBrand, getBrands } = require("../controllers/brandController");

const router = express.Router();

router.post("/", createBrand).get(getBrands);

module.exports = router;
