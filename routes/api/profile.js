/**
 * Created by Karina on 25.11.2016.
 */
var express= require('express');
var router = express.Router();
var donorsController = require('../../controllers/donors.controller');
var  status = require ('../../config/status');


router.post('/upload_avatar',
    function (req,res){
        if(req.user){
            var avaFile = req.files.avatar;
            var base64String = avaFile.data.toString('base64');
            if(base64String){
                donorsController.changeAvatar(req,base64String)
                    .then((result)=>res.json(result))
                    .catch((err)=> res.json(err));}
        }
        else res.end('Err');
    });


router.delete('/delete', function(req,res){
    donorsController.delete(req)
        .then((result)=>res.json(result))
        .catch((err)=> res.json(err));
});

router.post('/update', function (req,res) {
    donorsController.update(req)
        .then((result)=>res.json(result))
        .catch((err)=>res.json(err));

});


router.post('/addDonation',function(req,res){
    donorsController.addDonation(req)
        .then((result)=>res.json(result))
        .catch((err)=>res.json(err));

});

module.exports = router;