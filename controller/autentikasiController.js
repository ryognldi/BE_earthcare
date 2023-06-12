const express = require("express");

const router = express.Router();

router.post("/autentikasi/login", (req, res) => {
  try {
    res.send("berhasil login");
  } catch (error) {
    res.send("gagal login");
  }
});

router.post("/autentikasi/register", (req, res) => {
  try {
    res.send("berhasil register");
  } catch (error) {
    res.send("belum register");
  }
});
module.exports = router;
