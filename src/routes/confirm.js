const express = require('express');
const router = express.Router();
const confirmController = require('../controllers/confirmController');

router.patch('/', confirmController.confirmMeasure);

module.exports = router;