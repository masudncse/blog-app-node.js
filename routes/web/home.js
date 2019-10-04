const route = require("express").Router();
const HomeController = require("../../app/Http/Controllers/HomeController");

route.get("/", HomeController.index);
route.get("/about", HomeController.about);
route.get("/contact", HomeController.contact);
route.get("/category/:categoryId", HomeController.category);
route.get("/single/:id", HomeController.single);

module.exports = route;