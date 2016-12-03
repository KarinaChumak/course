var mongoose = require ('mongoose');
var Donor = require('../models/donor.model');
var hash = require('../config/hash');
const TWO_MONTH= 2*30*24*60*60*1000;
var status = require('../config/status');

exports.create = function (req,res) {
  return new Promise(function(resolve, reject){
      // Donor.findOne({'email' : email}, '-__v', function(err, donor){
      //     if(err) reject(err);
      //     if(donor) reject(status.user_exists);
      // });

      var donor = new Donor({
          name : req.body.name,
          surname : req.body.surname,
          patronymic: req.body.patronymic,
          birthdate : req.body.birthdate,
          email : req.body.email,
          password: hash.sha512(req.body.password).passwordHash,
          city: req.body.city,
          available: isAvailable(req),
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


//todo renew
function isAvailable(req){
    if((Date.now() - new Date(req.body.lastDonation).getTime()) >= TWO_MONTH)
     return true;
   else return false;
};


exports.getAll = function (params) {
    return new Promise(function (resolve,reject){
        Donor.find(params, '-__id -__v -avatar', function(err, donors){
            if(err) reject(err);
           resolve(donors);

    });
    });
};


exports.changeAvatar = function(req,base64String ){
    return new Promise (function (resolve, reject){

        Donor.findOne({email: req.user.email},function(err,donor){
            if(err)
                reject(err);
            if(donor){
                donor.avatar = base64String;
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
     Donor.findOne({'email' : email}, '-__v', function(err, donor){
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
      Donor.findOne({'_id' : id},' ',function(err, donor){
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
        Donor.findOne({'_id' : req.user._id},' ',function(err, donor){
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
        Donor.findOne({'_id' : req.user._id},' ',function(err, donor){
            if(err)
                reject(err);
            if (donor){
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