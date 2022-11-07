const express = require("express");
const {
  getSuppliers,
  createSupplier,
  getSupplierById,
  updateSupplier,
} = require("../controllers/supplierController");

const router = express.Router();

router.route("/").get(getSuppliers).post(createSupplier);

router.route("/:id").get(getSupplierById).patch(updateSupplier);

module.exports = router;
