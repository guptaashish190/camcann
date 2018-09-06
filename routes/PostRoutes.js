const express = require("express");
const router = express.Router();
const Image = require("../models/Image");

router.get("/", (req, res) => {
    res.send("Router Working");
});

router.post("/submitImageData", (req, res) => {
    const { time, camera, confidence, label, url, coordinates } = req.body;
    const ImageInfo = {
        time, camera, confidence, label, url, coordinates
    }
    console.log(ImageInfo);
    new Image(ImageInfo).save((err, resp) => {
        if (err) {
            res.json({
                status: "failed",
                error: err,
            });
        } else {
            res.json({
                status: resp,
                error: err,
            });
        }
    });
});

module.exports = router;