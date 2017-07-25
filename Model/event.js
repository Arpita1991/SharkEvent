var mongoose = require('mongoose');
mongoose.createConnection('mongodb://localhost/eventbrite');

var Schema = mongoose.Schema;
var userSchema = new Schema({
   name:String,
   location:String,
   startDate:String,
   endDate:String,   
   startTime:String,
   endTime:String,   
   images:String,
   tname:String,
   tavailable:String,
   tprice:String,
   etype:String,
   etopic:String,
   showTicket:String
});
module.exports = mongoose.model('event', userSchema); 