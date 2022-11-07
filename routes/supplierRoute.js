const express = require("express");
const { getSuppliers } = require("../controllers/supplierController");

const router = express.Router();

router.route("/").get(getSuppliers).post();

router.route("/:id").get();

module.exports = router;