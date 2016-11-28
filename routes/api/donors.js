/**
 * Created by Karina on 25.11.2016.
 */
var express= require('express');
var router = express.Router();
var donorsController = require('../../controllers/donors.controller');
"use strict";


router.get('/', function (req,res){
    res.setHeader('Access-Control-Allow-Origin', '*');

// Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');

// Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', '*');

// Set to true if you need the website to include cookies in requests
    res.setHeader('Access-Control-Allow-Credentials', true);

    let params = {};
    if(req.query.group){
         params.group = parseInt(req.query.group);
    }
    if(req.query.rhesus){
        params.rhesus=req.query.rhesus;
    }
    if(req.query.city){
        params.city = req.query.city;
    }
    donorsController.getAll(params)
        .then((donors)=>res.json( donors))
        .catch((err)=>res.json(err));
});

router.get('/:id', function (req,res){
    donorsController.getById(id)
        .then((donor)=>res.json(donor))
        .catch((err)=>res.json(err));

});

module.exports = router;