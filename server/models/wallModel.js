//BOTH MESSAGE & COMMENT MODELS

var mongoose = require('mongoose'); // mongoose init
var MessageSchema = new mongoose.Schema({ // set a schema
  _user: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
  message: {type:String, required:true},
  _comments:[{type: mongoose.Schema.Types.ObjectId, ref: "Comment"}]
  // _comment: {[comments]}
}, //
{timestamps:true});
mongoose.model('Message', MessageSchema); //pass to Controller


var CommentSchema = new mongoose.Schema({ // set a schema
  comment: {type:String, required:true},
  _user: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
  _message:{type: mongoose.Schema.Types.ObjectId, ref: "Message"}
  // _comment: {[comments]}
}, //
{timestamps:true});
mongoose.model('Comment', CommentSchema); //pass to Controller
