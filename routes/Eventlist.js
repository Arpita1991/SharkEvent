// Arpitaben Patel(7389273)
// Manpreet Kaur Sidhu(7448335)
module.exports.Eventlist = function(req, res ){
 
 // createConnection to mongoose to our database eventbrite 
   var mongoose = require('mongoose');
    mongoose.createConnection('mongodb://localhost/eventbrite');
// add schema for  event table 
    var Event = require('../Model/event.js');
    
    
    // find function to retrive all the data from event table
    Event.find({},{},function(e,docs){
        // eventlist object to send to eventlist jade template in array form
    res.render('Eventlist', {"eventlist" : docs});
        });    

};
   
   
