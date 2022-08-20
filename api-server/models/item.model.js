const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    categoryId: {
        type: Schema.Types.ObjectId,
        ref: "category",
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

module.exports = mongoose.model('item', itemSchema);