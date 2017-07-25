// Arpitaben Patel(7389273)
// Manpreet Kaur Sidhu(7448335)
module.exports.saveUserData = function(req, res ){
       
 // createConnection to moongoose      
var mongoose = require('mongoose');
mongoose.createConnection('mongodb://localhost/eventbrite');

// add schema for user table 
var User = require('../Model/users.js');

// create new_user object for  user details 
var new_user = new User({
   name:req.body.FirstName,
   email:req.body.Email,
   password:req.body.Password,
   Oname:req.body.Oname,
   Odesc:req.body.Odesc,
   Onumber:req.body.Onumber,
   Osize:req.body.Osize,
   address:req.body.Oaddress    
});

//diplaying data to console.log for testing purpose
//console.log(new_user);
// save the new_user details on use table by save function
new_user.save(function (err, new_user) {
        
  if (err)  
  {
        // of any error occur it will redirect to same  page with error
      res.render('sign-up', { error: "Please Enter Correct Data"});
  }
  // after inserting redirect the page to generateEvent  
  res.render('generateEvent', { title: 'generateEvent' });
});
};