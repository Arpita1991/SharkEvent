// Arpitaben Patel(7389273)
// Manpreet Kaur Sidhu(7448335)
module.exports.organizeEvent = function(req, res ){
   
   // createConnection to mongoose to our database eventbrite 
var mongoose = require('mongoose');
mongoose.createConnection('mongodb://localhost/eventbrite');
// add schema file for event table
var Event = require('../Model/event.js');

//add multipart dependency to store/upload images
var multiparty = require('multiparty');
var form  = new multiparty.Form(); 

//Path to save images
var imgPath = './public/images/';

//retrive  the filesand input details from form 
form.parse(req, function(err, fields, files) {
    var fs = require('fs');
    var img = files.images[0];

// create object new_event to store the input data
 var new_event = new Event({
   name:fields.Ename,   
   location:fields.Elocation,
   startDate:fields.StartDate,
   endDate:fields.EndDate,   
   startTime:fields.StartTime,
   endTime:fields.EndTime,   
   images:files.images[0].originalFilename,
   tname:fields.TName,
   tavailable:fields.TQuantity,
   tprice:fields.Tprice,
   etype:fields.Etype,
   etopic:fields.Etopic,
   showTicket:fields.showtickets 
});
 
 if(files != '')
 {
 //refile function to read the file from image path  
    fs.readFile(img.path,function name(err,data) {
        var path = "./public/images/"+img.originalFilename;
    // writeFile to store the image in out path 
        fs.writeFile(path,data,function (error) {
            if(error) console.log(error);
            });  
    });
}
// printing data in console to for testing purpose
//console.log(new_event);
// call save function to save the new event d ata in events table
new_event.save(function (err, new_event) {
  if (err)  
  {
        // if any error occur it will redirect to same  page with error
      res.render('CreateEvent', { error: "Please Enter Correct Data"});
  }
  // after inserting redirect the page to index page  
  res.render('index', { title: 'index' });
});
});

};
