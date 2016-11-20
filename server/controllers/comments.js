var mongoose = require('mongoose');
var Message = mongoose.model('Message');
var Comment = mongoose.model('Comment');


function commentsController(){
  this.create = function(req, res){
    var newComment = new Comment(req.body);
    newComment._user = req.session.userId;
    newComment._message = req.params.id;
    newComment.save(function(err,results){
      if (err){
        res.json(err)
      }else{
        console.log('add comment');
        Message.findOne({_id: req.params.id}).exec(function(err, messsage){
          if(err){
            res.json(err)
          }else{
            message.comments.push(newComment._id)
            message.save(function(err, results){
              if(err){
                res.json(err)
              }else{
                console.log("goddamn");
                res.sendStatus(200);
              }
          })
        }
      })
    }
  })
};
};


module.exports = new commentsController();
