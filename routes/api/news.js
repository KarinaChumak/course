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
        newsController.create(req,res)
            .then((result)=>res.json(result))
            .catch((err)=>res.json(err));
    }
);



module.exports = router;
