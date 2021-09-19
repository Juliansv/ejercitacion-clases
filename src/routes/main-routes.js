const express = require('express');
const router = express.Router();

const mainController = require('../controllers/main-controller');

router.get('/', mainController.index);

router.get('/about', mainController.about);

router.get('/detalle/:id', mainController.detalle);

module.exports = router;