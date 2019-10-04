const route = require("express").Router();
const categoryController = require("../../app/Http/Controllers/categoryController");

route.get("/categories", categoryController.index);
route.get("/categories/create", categoryController.create);
route.post("/categories/store", categoryController.store);
route.get("/categories/:id/edit", categoryController.edit);
route.post("/categories/:id/update", categoryController.update);
route.get("/categories/:id/delete", categoryController.delete);

route.get("/posts", function (req, res) {
    res.render("admin/modules/post/list");
});

module.exports = route;