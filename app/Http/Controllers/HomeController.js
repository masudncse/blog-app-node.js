const moment = require('moment');
const Post = require('../../Post');
const Category = require('../../Category');
const url = require('url');

exports.index = (req, res) => {
    Post.getPosts(function (err, posts) {
        if (err) {
            return res.render("errors/500");
        }

        Category.getCategories(function (err, categories) {
            if (err) {
                return res.render("errors/500");
            }

            res.render("pages/home", {
                posts,
                categories,
            });
        })
    });
};

exports.about = (req, res) => {
    Category.getCategories(function (err, categories) {
        if (err) {
            return res.render("errors/500");
        }
        res.render("pages/about", {categories});
    });
};

exports.contact = (req, res) => {
    Category.getCategories(function (err, categories) {
        if (err) {
            return res.render("errors/500");
        }
    res.render("pages/contact", {categories});
});
};

exports.category = (req, res) => {
    let q = url.parse(req.originalUrl, true);

    Post.getPostsByCategory(req, res, function (err, posts) {
        if (err) {
            return res.render("errors/500");
        }

        Category.getCategories(function (err, categories) {
            if (err) {
                return res.render("errors/500");
            }

            res.locals.url = q;
            res.render("pages/category", {
                posts,
                categories,
            });
        })
    });
};

exports.single = (req, res) => {
    Post.getPost(req.params.id, function (err, post) {
        if (err) {
            return res.render("errors/500");
        }

        Category.getCategories(function (err, categories) {
            if (err) {
                return res.render("errors/500");
            }

            res.render("pages/single", {
                post,
                categories
            });
        })
    });
};
