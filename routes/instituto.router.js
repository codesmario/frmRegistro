const express = require('express');
const InstitutoController = require('../controller/InstitutoController');
const router = express.Router();

router.get('/', InstitutoController.index)

module.exports = router;