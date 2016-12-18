var mongoose = require ('mongoose');
var Donor = require('../models/donor.model');
var hash = require('../config/hash');
const TWO_MONTH= 2*30*24*60*60*1000;
var status = require('../config/status');

exports.create = function (req,res) {
  return new Promise(function(resolve, reject){


      var donor = new Donor({
          name : req.body.name,
          surname : req.body.surname,
          patronymic: req.body.patronymic,
          birthdate : req.body.birthdate,
          email : req.body.email,
          password: hash.sha512(req.body.password).passwordHash,
          city: req.body.city,
          group: req.body.group,
          rhesus: req.body.rhesus

      });

      donor.donations.push(req.body.lastDonation);
            donor.save(function(err,user){
          if(user)  resolve(user);
            reject(err);
      });
  });
};




exports.getAll = function (params) {
    return new Promise(function (resolve,reject){
        Donor.find(params,  function(err, donors){
            if(err) reject(err);
           resolve(donors);

    });
    });
};


exports.changeAvatar = function(req ){
    return new Promise (function (resolve, reject){

        Donor.findOne({'_id' : req.body.id},function(err,donor){
            if(err)
                reject(err);
            if(donor){
                donor.avatar = req.body.avatar;
                donor.save(function(err){
                    if(err)
                        reject(err);
                    resolve(status.added_avatar);
                });

            }
            else
                reject(status.donor_not_found);

        });
})};

exports.getByEmail = function(email){
 return new Promise( function (resolve, reject){
     Donor.findOne({'email' : email},  function(err, donor){
         if(err)
             reject(err);
         if(donor)
             resolve (donor);
         else
             reject(status.donor_not_found);
     });
 });
};

exports.getById = function(id){
  return new Promise(function (resolve,reject){
      Donor.findOne({'_id' : id},function(err, donor){
          if(err)
              reject(err);
          if(donor)
              resolve (donor);
          else
              reject(status.donor_not_found);
      });
  });
};


exports.addDonation = function (req) {
    return new Promise (function(resolve,reject){
        Donor.findOne({'_id' : req.body.id},function(err, donor){
            if(err)
                reject(err);
            if (donor){
                donor.donations.push(req.body.donation);
                donor.save(function(err){
                    if(err)
                        reject(err);
                    resolve(status.saved);
                });
            }
            else
                reject(status.donor_not_found);


    });

})};

exports.delete = function(req){
    return new Promise (function(resolve, reject){
            Donor.remove({_id : req.user._id},function(err){
            if(err) reject(err);
            resolve(status.deleted);
        });
    });
};


//todo check if email exists
exports.update = function(req){
    return new Promise(function (resolve,reject){
        Donor.findOne({'_id' : req.user._id},function(err, donor){
            if(err)
                reject(err);
            if (donor){
                console.log(JSON.stringify(req.body));
                if(req.body.name) donor.name = req.body.name;
                if(req.body.surname) donor.surname = req.body.surname;
                if(req.body.patronymic) donor.patronymic = req.body.patronymic;
                if(req.body.birthdate) donor.birthdate = req.body.birthdate;
                if(req.body.email) {
                    Donor.findOne({'email' : req.body.email}, '-__v', function(err, res){
                        if(res){reject (status.user_exists)}
                        else donor.email = req.body.email;
                    });
                }

                if(req.body.birthdate) donor.birthdate = req.body.birthdate;
                if(req.body.city) donor.city = req.body.city;
                if(req.body.password && req.body.password == req.body.password2)
                    donor.password = hash.sha512(req.body.password).passwordHash;

                donor.save(function(err){
                    if(err)
                        reject(err);

                    resolve(status.saved);
                });}
            else
                reject(status.donor_not_found);

        });
    });
};