const express = require("express");
const glen = express.Router();
const matt = require("../controller/MattController");

glen.get('/', matt.main); // #1
glen.post('/add-user', matt.addUser); // #2
glen.get('/users', matt.getUsers); // #3
glen.post('/update-user/:index', matt.updateUser); // #4
glen.post('/delete-user/:index', matt.deleteUser); // #5

module.exports = glen;
