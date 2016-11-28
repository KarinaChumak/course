/**
 * Created by Karina on 25.11.2016.
 */
/**
 * Created by Karina on 25.11.2016.
 */
var express = require('express');
var router = express.Router();
var adminController = require('../../controllers/admins.controller');
var recipientController = require ('../../controllers/recipient.controller');
var status = require('../../config/status');


router.get('/',function(req,res){
    recipientController.getAccepted()
        .then((recip)=>res.json(recip))
        .catch((err)=> res.json(err));
});

router.post('/create', function (req,res){
        recipientController.create(req,res)
            .then((result)=>res.json(result))
            .catch((err)=>res.json(err));
    }
);



module.exports = router;
