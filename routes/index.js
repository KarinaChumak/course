var express = require('express');
var router = express.Router();
var donorsController = require('../controllers/donors.controller');
var recipientController = require('../controllers/recipient.controller');
var hash = require('../config/hash');
var passport = require('passport');
var logout = require('express-passport-logout');


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

router.post('/logOut', function(req,res){
        req.session.destroy(function () {
        req.logOut();
        res.redirect('/');})
});

router.post('/signUp', function(req,res){
    if(req.body.password === req.body.password2){
              donorsController.create(req,res)
                  .then((donor)=>req.logIn(donor, function () {
                      return res.redirect('/donors/profile');
                  }))
                  .catch((err)=>res.json(err));
            }
    else  res.end('Passes don\'t match');
});

router.get('/recipients',function(req,res){
    recipientController.getAccepted()
        .then((recip)=>res.render('recipients', {recipients: recip}))
        .catch((err)=> res.json(err));
});

router.post('/logIn', passport.authenticate('local',{failureRedirect:'/'}),function (req,res) {
    if(req.user){
        if(req.user.role)
            res.redirect('/admin');
        else
            res.redirect('/donors/profile');
    }
    else
        res.end(401);


});


module.exports = router;

