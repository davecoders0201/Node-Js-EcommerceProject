const express = require('express');
const router = express.Router();
const path = require('path');

router.use('/images', express.static(path.join(__dirname, 'images')));


module.exports = router;