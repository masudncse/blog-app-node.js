const moment = require('moment');
const Post = require('../../Post');
const Category = require('../../Category');

exports.index = (req, res) => {
    Post.getPosts(function (err, posts) {
        if (err) {
            return res.render("errors/500");
        }

        res.render("admin/post/list", {
            posts
        });
    });
};

exports.create = (req, res) => {
    Category.getCategories(function (err, categories) {
        if (err) {
            return res.render("errors/500");
        }

        res.render("admin/post/create", {categories});
    });
};

exports.store = (req, res) => {
    let data = {
        categoryId: req.body.categoryId,
        title: req.body.title,
        content: req.body.content,
        createdAt: moment().format('YYYY-MM-DD H:mm:ss')
    };

    Post.createPost(data, function (err, post) {
        if (err) {
            return res.render("errors/500");
        }

        Category.getCategories(function (err, categories) {
            if (err) {
                return res.render("errors/500");
            }

            res.redirect(__siteurl + "/admin/posts/edit/" + post.insertId);
        });
    });
};

exports.edit = (req, res) => {
    Post.getPost(req.params.id, function (err, post) {
        if (err) {
            return res.render("errors/500");
        }

        Category.getCategories(function (err, categories) {
            res.render("admin/post/edit", {
                post,
                categories
            });
        })
    });
};

exports.update = (req, res) => {
    let data = {
        categoryId: req.body.categoryId,
        title: req.body.title,
        content: req.body.content
    };

    Post.updatePost(data, req.params.id, function (err, result) {
        if (err) {
            return res.render("errors/500");
        }

        req.flash('success', 'Updated successfully!');
        res.redirect("back");
    });
};

exports.delete = (req, res) => {
    Post.deletePost(req.params.id, function (err, result) {
        if (err) {
            return res.render("errors/500");
        }

        req.flash('success', 'Deleted successfully!');
        res.redirect("back");
    });
};