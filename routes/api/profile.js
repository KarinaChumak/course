/**
 * Created by Karina on 25.11.2016.
 */
var express= require('express');
var router = express.Router();
var donorsController = require('../../controllers/donors.controller');
var  status = require ('../../config/status');


router.post('/upload_avatar',
    function (req,res){
        if(req.user) {
                donorsController.changeAvatar(req)
                    .then((result)=>res.json(result))
                        .catch((err)=> res.json(err));
        }
    else res.json(status.no_rights);

    });


router.delete('/delete', function(req,res){
    if(req.user) {
        donorsController.delete(req)
            .then((result)=>res.json(result))
            .catch((err)=> res.json(err));
    }
    else res.json(status.no_rights);
});

router.post('/update', function (req,res) {
    if(req.user) {
    donorsController.update(req)
        .then((result)=>res.json(result))
        .catch((err)=>res.json(err));
    }
    else res.json(status.no_rights);

});


router.get('/',function(req,res){

    res.setHeader('Access-Control-Allow-Origin', '*');

// Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');

// Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', '*');

// Set to true if you need the website to include cookies in requests
    res.setHeader('Access-Control-Allow-Credentials', true);
    if(req.user){
        donorsController.getById(req.user._id)
            .then ((result)=>res.json(result))
            .catch((err)=>{
                // if (req.user.role){
                //     res.redirect('/admin/');
                // }
                // else
                    res.json(err);
            });
    }
    else res.json(status.log_in);
});

router.post('/addDonation',function(req,res){
    console.log(req);
    donorsController.addDonation(req)
        .then((result)=>res.json(result))
        .catch((err)=>res.json(err));

});

module.exports = router;