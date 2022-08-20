const express = require('express');
const Item = require('../models/item.model');

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

exports.GetCategoriesAndItems = async (req, res) => {
    // const itemCategory = await Item.find({categoryId: req.params.id}).populate('categoryId')
    const itemCategory = await Item.findOne({categoryId: req.params.id})
    .populate('categoryId')
    .exec()
    res.status(200).json(itemCategory);
}

exports.getAllItemsWithCategory = async (req, res) => {
    
    try {
        let getEverthing = await Item.aggregate([
            { $lookup:
              {
                from: "categories",
                localField: "categoryId",
                foreignField: "_id",
                as: "Info"
              }
            }
        ]);
        res.status(200).json({
            status: "Success",
            results: getEverthing.toString()
        })
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: err
        })
    }

    
}