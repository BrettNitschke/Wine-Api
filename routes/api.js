var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Wine = require('../models/wines');




router.get('/', function(req, res){
  res.json({
    message: 'Connected to api!'
  });
});



//get all wines
router.get('/wines', function(req, res){
  Wine.find(function(err, wines){
    if (err)
      res.send(err);
    res.json(wines);
  });
});

//get wine by id
router.get('/wines/:wine_id', function(req, res){
  Wine.findById(req.params.wine_id, function(err, wine){
    if (err)
      res.send(err);
    res.json(wine);
  });
});

//get wines by winery
router.get('/wines/winery/:winery', function(req, res){
  console.log(req.params.winery);
  Wine.find({'winery': req.params.winery}, function (err, wines){
      if (err)
        res.send(err);
      res.json(wines);
  });
});

//get wines by vintage
router.get('/wines/vintage/:vintage', function (req, res){
  console.log(req.params.vintage);
  Wine.find({'vintage': req.params.vintage}, function(err, wines){
    if(err)
      res.send(err);
    res.json(wines);
  });
});

//delete wine by id
router.delete('/wines/:wine_id', function(req, res){
  Wine.remove({
    _id: req.params.wine_id
  }, function(err, wine){
    if (err)
      res.send(err);
    res.json({
      message: 'Wine deleted'
    });
  });
});




router.post('/addwine', function(req, res){
  console.log(req.body.winery + " " +  req.body.name + " " + req.body.vintage + " added");

  var wine = new Wine();
  wine.winery = req.body.winery;
  wine.name = req.body.name;
  wine.vintage = req.body.vintage;

  wine.save(function(err){
    if(err)
      res.send(err);
    res.json({
        message: 'wine added'
    });
  })

});







module.exports = router;
