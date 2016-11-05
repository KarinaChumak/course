/**
 * Created by Karina on 11.11.2016.
 */
var express= require('express');
var router = express.Router();
var donorsController = require('../controllers/donors.controller');

router.get('/', function (req,res){
              donorsController.getAll()
                  .then((donors)=>res.render('../views/donors', {title: "All donors", donors: donors}))
                  .catch((err)=>res.end(err));
        });


router.get('/profile',function(req,res){
    if(req.user){
        donorsController.getById(req)
            .then ((result)=>res.render('../views/myprofile', {donor : result}))
            .catch(()=>res.end('err'));
    }
    else res.end('Log in');
});


router.get('/profile/update', function (req,res) {
    res.render('../views/donorupdate');
});

router.post('/profile/update', function (req,res) {
    donorsController.update(req)
        .then(()=>res.redirect('/donors/profile'))
            .catch((err)=>res.json(err));

});


router.post('/profile/addDonation',function(req,res){
 donorsController.addDonation(req)
     .then(()=>res.redirect('/donors/profile'))
     .catch(()=>res.end("err"));

});

router.delete('/profile/delete', function(req,res){
       donorsController.delete(req)
        .then(()=>res.end("deleted"))
        .catch(()=> res.end("error"));
});

router.post('/upload_avatar',
    function (req,res){
    if(req.user){
        var avaFile = req.files.avatar;
        var base64String = avaFile.data.toString('base64');
            donorsController.changeAvatar(req,base64String)
                .then(()=>res.redirect('/donors/profile'))
                .catch(()=> res.end("error"));

    }
     else res.end('Err');
});

module.exports = router;