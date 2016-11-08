var mongoose = require ('mongoose');
var Admin = require('../models/admin.model');
var hash = require('../config/hash');

exports.create = function (req,res) {
    var admin = new Admin({
        name : req.body.name,
        surname : req.body.surname,
        email : req.body.email,
        password: hash.sha512(req.body.password).passwordHash,
        role: 'admin'
    });

    admin.save(function (err,result) {
        if(result)res.end('"status":"saved"');
        else res.end('"status":"error"');

    });
};

exports.getAdmin = function(){
    return new Promise(function (resolve,reject) {
        Admin.findOne({},'-__v',function(err,admin){
            if(err)
                reject(err);
            if(admin)
                resolve(admin);
            else
                reject(JSON.parse('"status":"not found"'));
        });
    });
};