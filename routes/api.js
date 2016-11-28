/**
 * Created by Karina on 25.11.2016.
 */
var express = require('express');
var router = express.Router();
var auth = require('./api/auth');
var admin = require('./api/admin');
var donors = require('./api/donors');
var profile = require('./api/profile');
var recipients = require('./api/recipient');



router.use('/auth',auth);
router.use('/admin',admin);
router.use('/donors',donors);
router.use('/profile',profile);
router.use('/recipients', recipients);


module.exports = router;