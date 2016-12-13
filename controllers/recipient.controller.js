/**
 * Created by Karina on 22.11.2016.
 */
var mongoose = require ('mongoose');
var Recipient = require ('../models/recipient.model');
var status = require('../config/status');

exports.create = function (req,res) {
    return new Promise(function (resolve,reject) {
        var recipient = new Recipient({
            name: req.body.name,
            surname: req.body.surname,
            diagnose: req.body.diagnose,
            group: req.body.group,
            rhesus: req.body.rhesus,
            status: "new"
        });

        recipient.save(function (err, recip) {
            if (recip)  resolve(status.saved);
            reject(err);
        });

    });
  };

exports.getNew = function () {
    return new Promise (function (resolve, reject) {
        Recipient.find({'status' : 'new'},function(err,res){
            if(err ) reject(err);
            if (res) resolve(res);
            else reject(status.recipient_not_found);
        });

    });
};

exports.getAccepted = function () {
    return new Promise (function (resolve, reject) {
        Recipient.find({'status' : 'accepted'},'-_id -__v -status',function(err,res){
            if(err ) reject(err);
            if (res) resolve(res);
            else reject(status.recipient_not_found);
        });

    });
};

exports.delete = function (id) {
 
    return new Promise(function(resolve, reject){
        Recipient.remove({_id:id},function (err,result) {
            if(err) reject(err);
            if (result) resolve(status.deleted);
    else reject(status.recipient_not_found);
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
                if(res) resolve(status.accepted);
                else reject(status.recipient_not_found);
            })

        });


    });
};