var express = require('express');
var router = express.Router();
var adminController = require('../controllers/admins.controller');
var recipientController = require ('../controllers/recipient.controller');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.end('Admin panel');
});

router.get('/new_recipients', function(req, res){
  if(req.user && req.user.role === 'admin'){
    recipientController.getNew()
      .then((result) => res.render('newrecipients',{ recipients:result}))
      .catch(()=>res.end('"status":"error"'));
  }
  else res.end('"status":"no rights"');
});


router.delete('/delete', function(req,res){
  if(req.user && req.user.role === 'admin'){
  recipientController.delete(req.query.id)
      .then(()=>res.end('"status":"deleted"'))
      .catch((err)=>res.end('"status":" not deleted"'));
  }
  else res.end('"status":"no rights"');
});



router.post('/accept', function (req,res) {
  if(req.user && req.user.role === 'admin'){
  recipientController.changeStatus(req.query.id)
      .then(()=>res.end('"status":"accepted"'))
      .catch((err)=> res.json(err));
  }
  else res.end('"status":"no rights"');
});

module.exports = router;
