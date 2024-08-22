/*----- Dependencies ------*/
const express = require("express");
const router = express.Router();
const functionsCtrl = require("../controllers/functions.js");

// GET /functions
router.get("/", functionsCtrl.index);

module.exports = router;
