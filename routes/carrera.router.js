const express = require('express');
const CarreraController = require('../controller/CarreraController');

const router = express.Router();

router.get('/', CarreraController.index)


module.exports = router;
