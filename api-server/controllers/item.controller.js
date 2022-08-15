const express = require('express');
const { Item } = require('../models/item.model');

exports.getAllItems = async(req, res) => {
    const items = await Item.find()
    res.status(200).json(items);
};

exports.getItemById = async(req, res) => {
    const item = await Item.findById({_id: req.params.id})
    res.status(200).json(item);
}

exports.addItem = async(req, res) => {
    const newItem = await Item.create(req.body)
    res.status(201).json({
        status: 'success',
        message: 'New Item added Successfully',
        data: {
            newItem
        }
    });
}

exports.updateItem = async(req, res) => {
    const item = await Item.findByIdAndUpdate({_id: req.params.id}, req.body)
    res.status(201).json(item);
}

exports.deleteItem = async(req, res) => {
    const item = await Item.findByIdAndRemove({_id: req.params.id})
    res.status(204).json({
        status: 'success',
        message: 'Item deleted'
    });
}