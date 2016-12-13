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
var news = require('./api/news');


router.use('/auth',auth);
router.use('/admin',admin);
router.use('/donors',donors);
router.use('/profile',profile);
router.use('/recipients', recipients);
router.use('/news', news);


module.exports = router;