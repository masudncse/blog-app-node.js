const route = require("express").Router();
const CategoryController = require("../../app/Http/Controllers/CategoryController");
const { check } = require('express-validator');

route.get("/", CategoryController.index);
route.get("/create", CategoryController.create);
route.post("/store", [
    check('name').not().isEmpty()
], CategoryController.store);
route.get("/edit/:id", CategoryController.edit);
route.post("/update/:id", CategoryController.update);
route.get("/delete/:id", CategoryController.delete);

module.exports = route;