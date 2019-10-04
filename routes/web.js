const route = require("express").Router();

route.use("/", require('./web/home'));
route.use("/auth", require('./web/auth'));

route.get("/admin", function (req, res) {
    res.render("admin/dashboard");
});
route.use("/admin/categories", require("./web/category"));
route.use("/admin/posts", require("./web/post"));

module.exports = route;
