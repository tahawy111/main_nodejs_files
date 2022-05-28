const express = require("express");
const router = express.Router();
const allControllers = require("../controllers");

router.get("/", allControllers.homeController);

module.exports = router;
