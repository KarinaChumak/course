/**
 * Created by Karina on 25.11.2016.
 */
var express= require('express');
var router = express.Router();
var donorsController = require('../controllers/donors.controller');
var  status = require ('../config/status');


router.get('/',function(req,res){
    if(req.user){
        donorsController.getById(req)
            .then ((result)=>res.render('../views/myprofile', {donor : result}))
            .catch((err)=>{
                if (req.user.role){
                    res.redirect('/admin/');
                }
                else  res.json(err);
            });
    }
    else res.json(status.log_in);
});


router.get('/update', function (req,res) {
    res.render('../views/donorupdate');
});



module.exports = router;