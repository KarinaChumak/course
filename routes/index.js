var express = require('express');
var router = express.Router();
var donorsController = require('../controllers/donors.controller');
var recipientController = require('../controllers/recipient.controller');
var hash = require('../config/hash');
var passport = require('passport');
var logout = require('express-passport-logout');
var status = require('../config/status');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/newdonor', function(req,res){
  res.render('donorform');
});

router.get('/new_recipient',function(req,res){
    res.render('recipientform');
});


module.exports = router;

