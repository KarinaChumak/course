var express = require('express');
var router = express.Router();
var adminController = require('../controllers/admins.controller');
var recipientController = require ('../controllers/recipient.controller');
var status = require('../config/status');

/* GET users listing. */
router.get('/', function(req, res) {
  if(req.user && req.user.role)
  res.render('adminpanel');
  else res.json(status.no_rights);
});


module.exports = router;
