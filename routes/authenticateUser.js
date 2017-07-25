// Arpitaben Patel(7389273)
// Manpreet Kaur Sidhu(7448335)
module.exports.authenticateUser = function(req, res ){

// createConnection for moongose with our database eventbrite
var mongoose = require('mongoose');
mongoose.createConnection('mongodb://localhost/eventbrite');

// add schema file for user table
var User = require('../Model/users.js');

// retrive the input details from login table
var name = req.body.username;
var password  = req.body.password;  

  // findone function to check the user details in user table for login
User.findOne({name:name,password:password},function (err,user) {
    if(err)
    {
         
        // if any error occurs send error
        res.render('login', { error: "Please Enter Correct Data"});
    }
    if(!user)
    {
           // if any error occurs send error
    res.render('login', { error: "Please Enter Correct Data" });
    }
  //  console.log(user);
     // if user is available then redirect to eventlist page.
     res.render('Eventlist', {"title" : 'Eventlist'});
});

};