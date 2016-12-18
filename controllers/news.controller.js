var mongoose = require ('mongoose');
var News = require ('../models/news.model.js');
var status = require('../config/status');

exports.create = function (req,res) {

    return new Promise(function (resolve,reject) {
        var news = new News({
            title: req.body.title,
            content : req.body.content,
            date: new Date().toJSON().slice(0,10)

        });

        news.save(function (err, result) {
            if (result)  resolve(status.saved);
            reject(err);
        });

    });
};

exports.delete = function (id) {
    return new Promise(function(resolve, reject){
        News.remove({_id:id},function (err,result) {
            if(err) reject(err);
            if (result) resolve(status.deleted);
            else reject(status.recipient_not_found);
        });

    });
};

exports.getNews = function () {
    return new Promise (function (resolve, reject) {
        News.find({},'-_id -__v -status',function(err,res){
            if(err ) reject(err);
            if (res) resolve(res);
            else reject(status.recipient_not_found);
        });

    });
};
