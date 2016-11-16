/**
 * Created by Karina on 22.11.2016.
 */
var express= require('express');
var router = express.Router();
var recipientController = require('../controllers/recipient.controller');

router.post('/create', function (req,res){
  recipientController.create(req,res);
}
);



module.exports = router;
