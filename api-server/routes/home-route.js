const express = require('express');
const router = express.Router();
const { getAllItems, addItem, updateItem, deleteItem, getItemById } = require('../controllers/item.controller');

router
.route('/')
.get(getAllItems)
.post(addItem);

router
.route('/:id')
.get(getItemById)
.patch(updateItem)
.delete(deleteItem);


module.exports = router;