var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;
var donorsCtrl = require('../../controllers/donors.controller');
var adminCtrl = require('../../controllers/admins.controller');
var hash = require('../hash');

module.exports = function () {
    passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    },
        function(username, password, done ){
            donorsCtrl.getByEmail(username)
                .then(donor => {
                        if (hash.sha512(password).passwordHash === donor.password) {
                            done(null, donor);
                        }
                        else
                            done(null, false);
                    }
                )
                .catch(err => {
                    adminCtrl.getAdmin()
                        .then(admin => {
                            if((admin.email === username) && (admin.password  === hash.sha512(password).passwordHash)){
                                done(null,admin);
                            }
                            else
                                done(null,false);
                        })
                        .catch(err=>done(null,false));
                });

        }
    ));
};