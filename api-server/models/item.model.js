const mongoose = require('mongoose');

var Item = mongoose.model('item', {
    category: {
        type: String,
        required: true
    },
    item_name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
});

module.exports = { Item };