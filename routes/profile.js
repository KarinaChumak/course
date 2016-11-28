/**
 * Created by Karina on 25.11.2016.
 */
var express= require('express');
var router = express.Router();
var donorsController = require('../controllers/donors.controller');
var  status = require ('../config/status');




router.get('/update', function (req,res) {
    res.render('../views/donorupdate');
});



module.exports = router;