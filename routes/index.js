var express = require('express');
var router = express.Router();

/* GET home page. */

const title = 'Food Delivery';
const max = 500;
const min = 100;
const foodItems = [
  {
    title:'Hyderabadi Biriyani',
    image:'1',
    price: Math.floor(Math.random() * (max - min + 1) + min),
    description: 'Welcome to the world\'s best biriyani, the Fragrance that gets you hungry, taste that makes you smile'
  },
  {
    title:'Dum Biriyani',
    image:'2',
    price: Math.floor(Math.random() * (max - min + 1) + min),
    description: 'Welcome to the world\'s best biriyani, the Fragrance that gets you hungry, taste that makes you smile'
  },
  {
    title:'Masala Dosa',
    image:'3',
    price: Math.floor(Math.random() * (max - min + 1) + min),
    description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
  },
  {
    title:'Biriyani',
    image:'4',
    price: Math.floor(Math.random() * (max - min + 1) + min),
    description: 'Welcome to the world\'s best biriyani, the Fragrance that gets you hungry, taste that makes you smile'
  },
  {
    title:'Idli',
    image:'5',
    price: Math.floor(Math.random() * (max - min + 1) + min),
    description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
  },
  {
    title:'Sadya',
    image:'6',
    price: Math.floor(Math.random() * (max - min + 1) + min),
    description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
  },
  {
    title:'Naan',
    image:'7',
    price: Math.floor(Math.random() * (max - min + 1) + min),
    description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
  },
  {
    title:'Fried Rice',
    image:'8',
    price: Math.floor(Math.random() * (max - min + 1) + min),
    description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
  },
  {
    title:'Puttu & Curry',
    image:'9',
    price: Math.floor(Math.random() * (max - min + 1) + min),
    description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
  },
  {
    title:'Noodles',
    image:'10',
    price: Math.floor(Math.random() * (max - min + 1) + min),
    description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
  },
  {
    title:'Paratha',
    image:'11',
    price: Math.floor(Math.random() * (max - min + 1) + min),
    description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
  },
  {
    title:'Cakes & Pastries',
    image:'12',
    price: Math.floor(Math.random() * (max - min + 1) + min),
    description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
  },
  {
    title:'Sandwich',
    image:'13',
    price: Math.floor(Math.random() * (max - min + 1) + min),
    description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
  },
  {
    title:'Nool Appam',
    image:'14',
    price: Math.floor(Math.random() * (max - min + 1) + min),
    description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
  },
  {
    title:'Shawarma',
    image:'15',
    price: Math.floor(Math.random() * (max - min + 1) + min),
    description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
  },
  {
    title:'Alfam',
    image:'16',
    price: Math.floor(Math.random() * (max - min + 1) + min),
    description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
  },
  {
    title:'Burger',
    image:'17',
    price: Math.floor(Math.random() * (max - min + 1) + min),
    description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
  },
  {
    title:'Burger & Fries',
    image:'18',
    price: Math.floor(Math.random() * (max - min + 1) + min),
    description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
  },
  {
    title:'Meals',
    image:'19',
    price: Math.floor(Math.random() * (max - min + 1) + min),
    description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
  },
  {
    title:'Chicken 65',
    image:'20',
    price: Math.floor(Math.random() * (max - min + 1) + min),
    description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
  },
  {
    title:'Chicken Curry',
    image:'21',
    price: Math.floor(Math.random() * (max - min + 1) + min),
    description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
  },
  {
    title:'Chicken Biriyani',
    image:'22',
    price: Math.floor(Math.random() * (max - min + 1) + min),
    description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
  },
  {
    title:'Kulfi',
    image:'23',
    price: Math.floor(Math.random() * (max - min + 1) + min),
    description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
  },
  {
    title:'Biriyani',
    image:'24',
    price: Math.floor(Math.random() * (max - min + 1) + min),
    description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
  },
  {
    title:'Biriyani',
    image:'25',
    price: Math.floor(Math.random() * (max - min + 1) + min),
    description: 'Welcome to the world\'s best biriyani, the Fragrance that gets you hungry, taste that makes you smile'
  },
  {
    title:'Chicken Fry',
    image:'26',
    price: Math.floor(Math.random() * (max - min + 1) + min),
    description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
  },
  {
    title:'Steak',
    image:'27',
    price: Math.floor(Math.random() * (max - min + 1) + min),
    description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
  },
  {
    title:'Pizza',
    image:'28',
    price: Math.floor(Math.random() * (max - min + 1) + min),
    description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
  },
];

router.get('/', function(req, res, next) {
  res.render('index', { title: title, foodItems : foodItems, homeTab: true });
});

router.foodItems = foodItems;

module.exports = router;