const route = require("express").Router();
const AuthController = require("../../app/Http/Controllers/AuthController");

route.get("/login", AuthController.login);

module.exports = route;