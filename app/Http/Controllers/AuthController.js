const moment = require('moment');
const Post = require('../../Post');
const Category = require('../../Category');

exports.login = (req, res) => {
    res.render("auth/login");
};
