var mongoose = require('mongoose');
mongoose.createConnection('mongodb://localhost/eventbrite');

var Schema = mongoose.Schema;
var userSchema = new Schema({
   name:String,
   email:String,
   password:String,
   Oname:String,
   Odesc:String,
   Onumber:Number,
   Osize:String,
   address:String     
});
module.exports = mongoose.model('users', userSchema); 