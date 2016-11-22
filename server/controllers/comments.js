// var mongoose = require('mongoose');
// var Message = mongoose.model('Message');
// var Comment = mongoose.model('Comment');


// function commentsController(){
//   this.create = function(req, res){
//     console.log('wrecked');
//     console.log(req.body);
//     var newComment = new Comment(req.body);
//     newComment._user = req.session.user._id;
//     newComment._message = req.params.id;
//     newComment.save(function(err,results){
//       if (err){
//         res.json(err)
//       }else{
//         console.log('add comment');
//         Message.findOne({_id: req.params.id}).exec(function(err, message){
//           if(err){
//             res.json(err)
//           }else{
//             message._comments.push(newComment._id)
//             message.save(function(err, results){
//               if(err){
//                 res.json(err)
//               }else{
//                 console.log("goddamn");
//                 res.sendStatus(200);
//               }
//           })
//         }
//       })
//     }
//   })
// };
// };


// module.exports = new commentsController();
