const express = require("express");
const router = express.Router();
const Image = require("../models/Image");

router.get("/", (req, res) => {
    res.send("Router Working");
});

router.post("/submitImageData", (req, res) => {
    const ImageInfo = req.body.ImageInfo;
    new Image(ImageInfo).save((err) => {
        if(err){
            res.json({
                status: "failed",
                error: err,
            });
        }else{
            res.json({
                status: "success",
                error: null,
            });
        }
    });
});

module.exports = router;