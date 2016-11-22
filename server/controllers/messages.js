// var mongoose = require('mongoose');
// var Message = mongoose.model('Message');

// function messageController(){
//   this.index = function(req,res){
//     Message.find({}, false, true)
//     .populate('_comment')
//     .exec(function(err, messages) {
//     res.json(messages);
//   })
// };

//   this.addMess = function(req,res){
//     console.log(req.body);
//     var newMessage = new Message(req.body)
//     newMessage._user = req.session.user._id;
//     newMessage.save( function(err, result) {
//       if(err) {
//         console.log('unable to add message');
//         console.log(err);
//       } else {
//         console.log('successfully added a message!');
//          res.json(result);
//       }
//     })
//   };
//   this.index = function(req,res){
//     Message.find({})
//     .populate('_user')
//     .populate({
//       path:'_comments',
//       model:'Comment',
//       populate:{path:'_user', model:'User'}
//     })
//     .exec(function(err,messages){
//       if(err){
//         console.log('unable to grab messages');
//         res.sendStatus(404);
//       }else{
//         console.log('foundem')
//         res.json(messages);
//       }
//     })
//   }
// };

// module.exports = new messageController();
