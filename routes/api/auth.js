/**
 * Created by Karina on 25.11.2016.
 */
var express = require('express');
var router = express.Router();
var passport = require('passport');
var adminController = require('../../controllers/admins.controller');
var donorsController = require('../../controllers/donors.controller');
var recipientController = require ('../../controllers/recipient.controller');
var status = require('../../config/status');

router.get('/logOut', function(req,res){
    req.session.destroy(function () {
        req.logOut();
        res.json(JSON.parse('{"status" : "success"}'));
        })
});


router.post('/logIn', passport.authenticate('local'),
    function (req,res) {
        res.json(req.user);
    });



router.post('/signUp', function(req,res){
    //if(req.body.password === req.body.password2){
        donorsController.create(req,res)
            .then((donor)=>req.logIn(donor, function () {
                return res.json(status.signed_up);}))
            .catch((err)=>res.json(err));
   // }
    //else  res.json(status.different_passes);
});


module.exports = router;
