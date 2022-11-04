const express = require("express");
const { getStores, createStore, getStoreById } = require("../controllers/storeController");

const router = express.Router();

router.route("/").get(getStores).post(createStore);

router.route("/:id").get(getStoreById);

module.exports = router;
