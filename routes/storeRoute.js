const express = require("express");
const { getStores } = require("../controllers/storeController");

const router = express.Router();

router.route("/").get(getStores);

module.exports = router;
