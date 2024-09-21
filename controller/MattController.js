const User = require('../models/User');

const users = [];

exports.main = (req, res) => {
    res.render('index', { users });
};

exports.addUser = (req, res) => {
    const { name, email } = req.body;
    const newUser = new User(name, email);
    users.push(newUser);
    res.redirect('/');
};

exports.getUsers = (req, res) => {
    res.render('users', { users });
};

exports.deleteUser = (req, res) => {
    const index = req.params.index;
    users.splice(index, 1);
    res.redirect('/users');
};

exports.updateUser = (req, res) => {
    const index = req.params.index;
    const { name, email } = req.body;
    users[index] = new User(name, email);
    res.redirect('/users');
};
