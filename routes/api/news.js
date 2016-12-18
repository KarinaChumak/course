var express = require('express');
var router = express.Router();
var newsController = require ('../../controllers/news.controller');
var status = require('../../config/status');


router.get('/',function(req,res){
    newsController.getNews()
        .then((news)=>res.json(news))
        .catch((err)=> res.json(err));
});

router.post('/create', function (req,res){
    if (req.user.role) {
        newsController.create(req, res)
            .then((result)=>res.json(result))
            .catch((err)=>res.json(err));
    }
    else res.json(status.no_rights);
    }
);

router.delete('/delete',function (req,res) {
    if(req.user.role){
        newsController.delete(req.body._id)
            .then((result)=>res.json(status.deleted))
            .catch((err)=>res.json(err));
    }
    else res.json(status.no_rights);
    });


module.exports = router;
