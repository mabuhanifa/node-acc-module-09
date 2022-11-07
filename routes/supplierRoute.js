const express = require("express");
const { getSuppliers, createSupplier, getSupplierById } = require("../controllers/supplierController");

const router = express.Router();

router.route("/").get(getSuppliers).post(createSupplier);

router.route("/:id").get(getSupplierById);

module.exports = router;