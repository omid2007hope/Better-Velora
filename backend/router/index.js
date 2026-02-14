const express = require("express");
const router = express.Router();

// Health
router.get("/server", (req, res) => {
  return res.status(200).send("server is running");
});

module.exports = router;
