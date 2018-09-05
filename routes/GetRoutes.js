const express = require("express");
const router = express.Router();
const Image = require("../models/Image");
const utils = require("../utils");

router.get("/findlabel", (req, res) => {
    const { camera, label, lowtime } = req.query;

    const queryObj = {
        camera: camera,
        label
    }

    const currentTime = utils.extractTimeFromString("2018-09-02 21:15:33");
    Image.find(queryObj).then((images, err) => {
        const filteredImages = [];

        images.forEach(image => {
            const imageTime = utils.extractTimeFromString(image.time);
            const subtractedTime = utils.subtractTimefromTime(Number(lowtime), currentTime);
            if (imageTime <= currentTime && imageTime >= subtractedTime) {
                filteredImages.push(image);
            }
        });
        res.send({
            response: filteredImages.length === 0 ? false : true,
            count: filteredImages.length
        });
    }).catch(err => {
        console.log(err);
    });
});

router.get('/getFromTimeRange', (req, res) => {
    const { startTime, endTime, label, camera } = req.query;

    const startTime = utils.extractTimeFromString(startTime);
    const endTime = utils.extractTimeFromString(endTime);

    const filteredImages = [];
    Image.find({ camera, label }).then((images) => {
        images.forEach((image) => {
            const imageTime = utils.extractTimeFromString(image.time);
            if (imageTime <= endTime && imageTime >= startTime) {
                filteredImages.push(image);
            }
        });
    });

    res.send({
        count: filteredImages.length,
        images: filteredImages
    });

});

router.get('/findMinConfidence', (req, res) => {
    const { camera, confidence, label } = req.query;

    const queryObj = {
        camera,
        confidence: { $gte: confidence },
        label,
    }

    Image.find(queryObj).then((images) => {
        res.send({
            count: images.length,
            images: images
        });
    }).catch(err => {
        console.log(err);
    });

});

router.get("/findlastfivetotwenty", (req, res) => {
    const { camera, label, currentTime } = req.query;

    const queryObj = {
        camera: camera,
        label
    }
    if (currentTime) {
        currentTime = utils.extractTimeFromString(currentTime);
    } else {
        currentTime = utils.extractTimeFromString("2018-09-02 21:30:33");
    }

    const currentTime = utils.extractTimeFromString("2018-09-02 21:30:33");
    Image.find(queryObj).then((images) => {
        const filteredImages = {
            5: [],
            10: [],
            15: [],
            20: []
        };

        images.forEach(image => {
            const imageTime = utils.extractTimeFromString(image.time);

            // last 5 mins
            let subtractedTime = utils.subtractTimefromTime(5, currentTime);

            console.log(imageTime, subtractedTime);

            if (imageTime <= currentTime && imageTime >= subtractedTime) {
                filteredImages[5].push({ url: image.url, confidence: image.confidence });
            }


            // last 10 mins
            subtractedTime = utils.subtractTimefromTime(10, currentTime);
            if (imageTime <= currentTime && imageTime >= subtractedTime) {
                filteredImages[10].push({ url: image.url, confidence: image.confidence });
            }

            // last 15 mins
            subtractedTime = utils.subtractTimefromTime(15, currentTime);
            if (imageTime <= currentTime && imageTime >= subtractedTime) {
                filteredImages[15].push({ url: image.url, confidence: image.confidence });
            }

            // last 20 mins
            subtractedTime = utils.subtractTimefromTime(20, currentTime);
            if (imageTime <= currentTime && imageTime >= subtractedTime) {
                filteredImages[20].push({ url: image.url, confidence: image.confidence });
            }
        });
        res.send({
            response: filteredImages
        });
    }).catch(err => {
        console.log(err);
    });
});


module.exports = router;
