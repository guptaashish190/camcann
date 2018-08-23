const express = require("express");
const router = express.Router();
const Data = require("../models/data");

router.get("/", (req, res) => {
    res.send("Router Working");
});

router.post("/submitImageData", (req, res) => {
    const { data, time } = req.body;
    console.log(data, time);
    const newdata = new Data({
        data 
    });

    newdata.save((err) => {
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