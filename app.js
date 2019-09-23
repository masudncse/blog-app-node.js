const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const ejs = require('ejs');
const path = require('path');

app.set('views', path.join(__dirname, "/resources/views"));
app.use("/", express.static(path.join(__dirname, "/public")));
app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// app.use("/api", require("./routes/api"));
app.use("/", require("./routes/web"));

app.listen(3000, function () {
    console.log("Server is running at http://127.0.0.1:3000");
});