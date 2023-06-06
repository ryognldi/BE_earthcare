const express = require("express");

const router = express.Router();

router.post("/login", (req, res) => {
  try {
    res.send("berhasil login");
  } catch (error) {
    res.send("gagal login");
  }
});
module.exports = router;
