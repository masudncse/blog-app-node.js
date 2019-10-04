const moment = require('moment');
const Category = require('../../Category');

exports.index = (req, res) => {
    Category.getCategories(function (err, categories) {
        if (err) return res.render("errors/500");
        res.render("admin/category/list", {
            categories
        });
    });
};

exports.create = (req, res) => {
    res.render("admin/category/create");
};

exports.store = (req, res) => {
    let data = {
        name: req.body.name,
        createdAt: moment().format('YYYY-MM-DD H:mm:ss')
    };

    Category.createCategory(data, function (err, result) {
        if (err) return res.render("errors/500");

        res.redirect(__siteurl + "/admin/categories/edit/" + result.insertId);
    });
};

exports.edit = (req, res) => {
    Category.getCategory(req.params.id, function (err, category) {
        if (err) return res.render("errors/500");

        res.render("admin/category/edit", {
            category
        });
    });
};

exports.update = (req, res) => {
    let data = {
        name: req.body.name
    };

    Category.updateCategory(data, req.params.id, function (err, result) {
        if (err) return res.render("errors/500");

        req.flash('success', 'Updated successfully!');
        res.redirect("back");
    });
};

exports.delete = (req, res) => {
    Category.deleteCategory(req.params.id, function (err, result) {
        if (err) return res.render("errors/500");

        req.flash('success', 'Deleted successfully!');
        res.redirect("back");
    });
};