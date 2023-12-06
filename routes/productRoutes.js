const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');


router.get('/productDetail', productController.detail);

module.exports = router