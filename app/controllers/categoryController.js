const moment = require('moment');
const category = require('../models/category');

exports.index = (req, res) => {
    category.getCategories(function (err, categories) {
        if (err) return res.render("errors/500");
        res.render("admin/modules/category/list", {
            categories
        });
    });
};

exports.create = (req, res) => {
    res.render("admin/modules/category/create");
};

exports.store = (req, res) => {
    let data = {
        name: req.body.name,
        createdAt: moment().format('YYYY-MM-DD H:mm:ss')
    };

    category.createCategory(data, function (err, result) {
        if (err) {
            console.log(err);
        }

        req.flash('message', "Successfully saved!");
        res.redirect(__siteurl + "/admin/categories/" + result.insertId + "/edit", {
            result
        });
    });
};

exports.edit = (req, res) => {
    category.getCategory(req.params.id, function (err, singleCategory) {
        if (err) {
            res.render("admin/modules/category/edit", {
                message: {
                    type: 'error',
                    text: "Something is wrong!"
                }
            });
        }
        res.render("admin/modules/category/edit", {
            category: singleCategory[0],
            message: {
                type: 'success',
                text: "Successfully saved!"
            }
        });
    });
};

exports.update = (req, res) => {
    let data = {
        name: req.body.name
    };

    category.updateCategory(data, req.params.id, function (err, result) {
        if (err) {
            return res.send(400).json({
                message: "Something is wrong!",
                errors: err
            });
        }
        res.redirect("back");
    });
};

exports.delete = (req, res) => {
    category.deleteCategory(req.params.id, function (err, result) {
        if (err) return res.render("errors/500");

        req.flash('success', 'Deleted');
        res.redirect("back");
    });
};