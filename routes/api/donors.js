/**
 * Created by Karina on 25.11.2016.
 */
var express= require('express');
var router = express.Router();
var donorsController = require('../../controllers/donors.controller');
"use strict";

router.get('/', function (req,res){
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

module.exports = router;