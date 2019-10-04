const mysql = require('mysql');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "blogdb"
});

exports.getCategories = (cb) => {
    db.query("SELECT * FROM categories", function (err, result, fields) {
        if (err) {
            return cb(err, null)
        }
        cb(null, result);
    });
};

exports.getCategory = (id, cb) => {
    db.query("SELECT * FROM categories WHERE id=?", [id], function (err, result, fields) {
        if (err) {
            return cb(err, null)
        }
        cb(null, result);
    });
};

exports.createCategory = (data, cb) => {
    db.query("INSERT INTO categories SET ?", data, function (err, result, fields) {
        if (err) {
            return cb(err, null)
        }
        cb(null, result);
    });
};

exports.updateCategory = (data, id, cb) => {
    db.query("UPDATE categories SET ? WHERE id=?", [data, id], function (err, result, fields) {
        if (err) {
            return cb(err, null)
        }
        cb(null, result);
    });
};

exports.deleteCategory = (id, cb) => {
    db.query("DELETE FROM categories WHERE id='" + id + "'", function (err, result, fields) {
        if (err) {
            return cb(err, null)
        }
        cb(null, result);
    });
};