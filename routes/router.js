const express = require("express");
const glen = express.Router();
const matt = require("../controller/MattController");

glen.get('/', matt.main);
glen.post('/add-user', matt.addUser);
glen.get('/users', matt.getUsers);
glen.post('/update-user/:index', matt.updateUser);
glen.post('/delete-user/:index', matt.deleteUser);

module.exports = glen;
