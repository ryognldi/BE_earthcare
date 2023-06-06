const express = require("express");
const autentikasiController = require("./controller/autentikasiController");

const router = express.Router();

router.use("/", autentikasiController);

module.exports = router;
