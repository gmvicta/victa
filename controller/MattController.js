const User = require('../models/User');

const users = [];

// METHOD #1
exports.main = (req, res) => {
    res.render('index', { users });
};

// METHOD #2
exports.addUser = (req, res) => {
    const { name, email } = req.body;
    const newUser = new User(name, email);
    users.push(newUser);
    res.redirect('/');
};

// METHOD #3
exports.getUsers = (req, res) => {
    res.render('users', { users });
};

// METHOD #4
exports.deleteUser = (req, res) => {
    const index = req.params.index;
    users.splice(index, 1);
    res.redirect('/users');
};

// METHOD #5
exports.updateUser = (req, res) => {
    const index = req.params.index;
    const { name, email } = req.body;
    users[index] = new User(name, email);
    res.redirect('/users');
};
