var express = require('express');
var router = express.Router();
var indexFiles = require('./index');

/* GET home page. */
const title = 'Food Delivery - Favourites';


const favItems = indexFiles.foodItems;

router.get('/', function(req, res, next) {
  res.render('favorite', { title: title, favoriteTab: true, favItems : favItems});
});

module.exports = router;