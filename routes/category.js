const express = require('express');
const router = express.Router();
const { seedCategory, fetchCategories } = require('../controllers/category');

router.post('/seed', seedCategory);

router.get('/all', fetchCategories);

module.exports = router;