// Arpitaben Patel(7389273)
// Manpreet Kaur Sidhu(7448335)
var express = require('express');
var router = express.Router();

router.get('/about', function(req, res, next) {
  res.render('about.html', { title: 'Express' });
});

module.exports = router;
