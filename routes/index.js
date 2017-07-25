// Arpitaben Patel(7389273)
// Manpreet Kaur Sidhu(7448335)
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'home' });
});


router.get('/login', function(req, res, next) {
  res.render('login', { title: 'login' });
});

router.get('/signup', function(req, res, next) {
  res.render('sign-up', { title: 'SignUp' });
});

router.get('/CreateEvent', function(req, res, next) {
  res.render('generateEvent', { title: 'generateEvent' });
});


module.exports = router;
