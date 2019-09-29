const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const ejs = require('ejs');
const path = require('path');
const logger = require("morgan");
const session = require('express-session');
const flash = require('express-flash');

app.use(logger("dev"));
app.use(session({
    secret: "JDJFLJSDL",
    resave: false,
    saveUninitialized: true
}));
app.use(flash());

app.set('views', path.join(__dirname, "/resources/views"));
app.use("/", express.static(path.join(__dirname, "/public")));
app.set("view engine", "ejs");

global.__siteurl = "http://127.0.0.1:3000";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// app.use("/api", require("./routes/api"));
app.use("/", require("./routes/web"));

app.listen(3000, function () {
    console.log("Server is running at http://127.0.0.1:3000");
});