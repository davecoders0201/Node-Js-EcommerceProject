const express = require("express");
const path = require("path");
const router = express.Router();

const imagesRouter = express.Router();

// Serve images from the "public/images" directory
router.use(express.static(path.join(__dirname, "public", "images")));

module.exports = imagesRouter;