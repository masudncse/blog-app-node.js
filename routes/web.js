const route = require("express").Router();

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

route.use("/admin/categories", require("./web/category"));
route.use("/admin/posts", require("./web/post"));

module.exports = route;
