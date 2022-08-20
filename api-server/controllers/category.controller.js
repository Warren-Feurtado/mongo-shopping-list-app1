const express = require('express');
const Category = require('../models/category.model');

exports.getAllCategories = async(req, res) => {
    const categories = await Category.find()
    res.status(200).json(categories);
};

exports.getCategoryById = async(req, res) => {
    const category = await Category.findById({_id: req.params.id})
    res.status(200).json(category);
}

exports.createCategory = async(req, res) => {
    const category = await Category.create(req.body)
    res.status(201).json({
        status: 'success',
        message: 'New Category Created Successfully',
        data: {
            category
        }
    });
}

exports.updateCategory = async(req, res) => {
    const category = await Category.findByIdAndUpdate({_id: req.params.id}, req.body)
    res.status(201).json(category);
}

exports.deleteCategory = async(req, res) => {
    const category = await Category.findByIdAndRemove({_id: req.params.id})
    res.status(204).json({
        status: 'success',
        message: 'Category deleted'
    });
}
