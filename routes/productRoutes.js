const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');


router.get('/productDetail', productController.detail);

router.get('/shoppingCart', productController.shoppingCart);


module.exports = router