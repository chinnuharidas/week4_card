var express = require('express');
var router = express.Router();

/* GET home page. */

const title = 'Food Delivery - Cart';

const cartItems = [
    {
        slNo: 1,
        item: 'Biriyani',
        price: 150.3,
        quantity: 3,
        discount: 8,
    },
    {
        slNo: 2,
        item: 'Chicken Fry',
        price: 110.8,
        quantity: 1,
        discount: 10,
    },
    {
        slNo: 3,
        item: 'Fried Rice',
        price: 80.8,
        quantity: 1,
        discount: 10,
    },
    {
        slNo: 4,
        item: 'Ice cream',
        price: 80.4,
        quantity: 3,
        discount: 5,
    },
    {
        slNo: 5,
        item: 'Biriyani',
        price: 150.3,
        quantity: 2,
        discount: 8,
    },
    {
        slNo: 6,
        item: 'Chicken Fry',
        price: 110.8,
        quantity: 1,
        discount: 10,
    },
    {
        slNo: 7,
        item: 'Fried Rice',
        price: 80.8,
        quantity: 1,
        discount: 10,
    },
    {
        slNo: 8,
        item: 'Ice cream',
        price: 80.4,
        quantity: 3,
        discount: 5,
    },
    {
        slNo: 9,
        item: 'Biriyani',
        price: 150.3,
        quantity: 2,
        discount: 8,
    },
    {
        slNo: 10,
        item: 'Chicken Fry',
        price: 110.8,
        quantity: 1,
        discount: 10,
    },
    {
        slNo: 11,
        item: 'Fried Rice',
        price: 80.8,
        quantity: 1,
        discount: 10,
    },
    {
        slNo: 12,
        item: 'Ice cream',
        price: 80.4,
        quantity: 3,
        discount: 5,
    }
];
let totalAmount = 0;
for (const iterator of cartItems) {
    let total = iterator.price * iterator.quantity;
    total = total * (100 - iterator.discount ) / 100;
    iterator.amount = Math.round(total, 2);
    totalAmount += total;
}

totalAmount = Math.round(totalAmount, 2);

router.get('/', function(req, res, next) {
  res.render('cart', { title: title, cartItems : cartItems, cartTab : true, totalAmount: totalAmount });
});

module.exports = router;