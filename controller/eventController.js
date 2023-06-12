const express = require("express");

const router = express.Router();

router.get("/event/lihat semua event", (req, res) => {
  try {
    res.send();
  } catch (eror) {
    next();
  }
});

router.get("/event/lihat event", (req, res) => {
  try {
    res.send();
  } catch (eror) {
    next();
  }
});

router.post("/event/join event", (req, res) => {
  try {
    res.send("berhasil join evnet");
  } catch (eror) {
    next("belum join event");
  }
});

module.exports = router;