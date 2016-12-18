/**
 * Created by Karina on 22.11.2016.
 */
var mongoose = require ('mongoose');
var Recipient = require ('../models/recipient.model');
var status = require('../config/status');

exports.create = function (req,res) {
    return new Promise(function (resolve,reject) {
        var recipient = new Recipient({
            name: req.body.recipient.name,
            surname: req.body.recipient.surname,
            diagnose: req.body.recipient.diagnose,
            city:req.body.recipient.city,
            group: req.body.recipient.group,
            rhesus: req.body.recipient.rhesus,
            email : req.body.recipient.email,
            avatar: req.body.recipient.avatar,
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
        Recipient.find({'status' : 'accepted'},function(err,res){
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