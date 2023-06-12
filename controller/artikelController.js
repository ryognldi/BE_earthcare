const express = require("express");

const router = express.Router();

router.get("/artikel/lihat semua artikel", (req, res) => {
  try {
    res.send();
  } catch (eror) {
    next();
  }
});

router.get("/artikel/lihat artikel", (req, res) => {
  try {
    res.send();
  } catch (eror) {
    next();
  }
});

module.exports = router;