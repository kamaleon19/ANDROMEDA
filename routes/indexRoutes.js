// Dependencias
const express = require('express');
const router= express.Router()
const indexController= require('../controllers/indexController')


// Routes

router.get('/', indexController.home)
router.get('/login', indexController.login)




module.exports = router