const express = require('express');
const router = express.Router();
const { getAllItems, addItem, updateItem, deleteItem, getItemById, GetCategoriesAndItems } = require('../controllers/item.controller');

router
// .route('/')
.get(('/'), getAllItems)
.get(('/geteverything'), GetCategoriesAndItems)
.post(addItem);

router
// .route('/:id')
.get(getItemById)
.patch(updateItem)
.delete(deleteItem)
.get(('/getcollections/:id'),GetCategoriesAndItems);


module.exports = router;