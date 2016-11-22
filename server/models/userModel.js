
// MODELS


var mongoose = require('mongoose'); // mongoose init
var UserSchema = new mongoose.Schema({ // set a schema
  name: {type: String, required:true, minlength:8},
  email: {type:String, required:true, minlength:8},
  password:{type:String, required:true, minlength:8}
}, //validations
{timestamps:true});
mongoose.model('User', UserSchema); //pass to Controller

