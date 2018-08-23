const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Router Working");
});

module.exports = router;