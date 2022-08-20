const express = require('express');
const router = express.Router();

const {getAllCategories, getCategoryById, createCategory, updateCategory, deleteCategory} = require('../controllers/category.controller');

router
.route('/')
.get(getAllCategories)
.post(createCategory);

router
.route('/:id')
.get(getCategoryById)
.patch(updateCategory)
.delete(deleteCategory);

module.exports = router;