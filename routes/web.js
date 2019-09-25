const route = require("express").Router();
const categoryController = require("../app/controllers/categoryController")

route.get("/", function (req, res) {
    res.render("pages/home");
});

route.get("/about", function (req, res) {
    res.render("pages/about");
});

route.get("/contact", function (req, res) {
    res.render("pages/contact");
});

route.get("/login", function (req, res) {
    res.render("auth/login");
});

route.get("/admin", function (req, res) {
    res.render("admin/dashboard");
});

route.get("/admin/categories", categoryController.index);

route.get("/admin/posts", function (req, res) {
    res.render("admin/modules/post/list");
});

module.exports = route;
