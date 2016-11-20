// We want to create a file that has the schema for our friends and creates a model that we can then call upon in our controller

// MODELS


var mongoose = require('mongoose'); // mongoose init
var UserSchema = new mongoose.Schema({ // set a schema
  name: {type: String, required:true, minlength:8},
  email: {type:String, required:true, minlength:8},
  password:{type:String, required:true, minlength:8}
}, //validations
{timestamps:true});
mongoose.model('User', UserSchema); //pass to Controller
//this file will be run when we require it using our config file
 // since the model is defined we'll be able to access it from our controller
