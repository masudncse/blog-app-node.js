const route = require("express").Router();
const PostController = require("../../app/Http/Controllers/PostController");

route.get("/", PostController.index);
route.get("/create", PostController.create);
route.post("/store", PostController.store);
route.get("/edit/:id", PostController.edit);
route.post("/update/:id", PostController.update);
route.get("/delete/:id", PostController.delete);

module.exports = route;