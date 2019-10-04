const mysql = require('mysql');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "blogdb"
});

exports.getPosts = (cb) => {
    db.query("SELECT * FROM posts", function (err, result, fields) {
        if (err) {
            return cb(err, null)
        }
        cb(null, result);
    });
};

exports.getPost = (id, cb) => {
    db.query("SELECT * FROM posts WHERE id=? LIMIT 1", [id], function (err, result, fields) {
        if (err) {
            return cb(err, null)
        }
        cb(null, result[0]);
    });
};

exports.getPostsByCategory = (req, res, cb) => {
    let PAGE = req.query.page || 1;
    let LIMIT = 3;
    let OFFSET = (PAGE - 1) * LIMIT;
    db.query("SELECT * FROM posts WHERE categoryId=? LIMIT ? OFFSET ?", [req.params.categoryId, LIMIT, OFFSET], function (err, result, fields) {
        if (err) {
            return cb(err, null)
        }
        cb(null, result);
    });
};

exports.createPost = (data, cb) => {
    db.query("INSERT INTO posts SET ?", data, function (err, result, fields) {
        if (err) {
            return cb(err, null)
        }
        cb(null, result);
    });
};

exports.updatePost = (data, id, cb) => {
    db.query("UPDATE posts SET ? WHERE id=?", [data, id], function (err, result, fields) {
        if (err) {
            return cb(err, null)
        }
        cb(null, result);
    });
};

exports.deletePost = (id, cb) => {
    db.query("DELETE FROM posts WHERE id='" + id + "'", function (err, result, fields) {
        if (err) {
            return cb(err, null)
        }
        cb(null, result);
    });
};