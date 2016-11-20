/**
 * Created by Karina on 22.11.2016.
 */
var mongoose = require ('mongoose');
var Recipient = require ('../models/recipient.model');

exports.create = function (req,res) {
    var recipient =  new Recipient({
        name: req.body.name,
        surname : req.body.surname,
        diagnose: req.body.diagnose,
        group:req.body.group,
        rhesus : req.body.rhesus,
        status : "new"
    });

    recipient.save(function(err, recip){
        if(recip) res.end('"status":"saved"');
        else res.end('"status":"error"');
    });


};

exports.getNew = function () {
    return new Promise (function (resolve, reject) {
        Recipient.find({'status' : 'new'},function(err,res){
            if(err ) reject(err);
            if (res) resolve(res);
            else reject();
        });

    });
};

exports.getAccepted = function () {
    return new Promise (function (resolve, reject) {
        Recipient.find({'status' : 'accepted'},'-_id -__v -status',function(err,res){
            if(err ) reject(err);
            if (res) resolve(res);
            else reject();
        });

    });
};

exports.delete = function (id) {

    return new Promise(function(resolve, reject){
        Recipient.remove({_id:id},function (err,result) {
            if(err) reject(err);
            resolve(result);

        });

    });
};



//todo
exports.changeStatus = function (id){
    return new Promise(function (resolve, reject){
       Recipient.findOne({_id:id},function (err,recipient) {
            if(err) reject(err);
            recipient.status = "accepted";
            recipient.save(function(err,res){
                if(err) reject(err);
                resolve(res);
            })

        });


    });
};