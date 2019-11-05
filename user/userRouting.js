var express = require('express');
var userController = require('./userController');

var userRouting = express.Router();

userRouting.route('/addUser').post(userController.regsiter)
userRouting.route('/findUser').get(userController.findUser)
userRouting.route('/userLogin').post(userController.userLogin)
userRouting.route('/delUser').post(userController.deleteuser)
module.exports = userRouting