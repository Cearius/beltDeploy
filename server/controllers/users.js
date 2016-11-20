//SERVER CONTROL

var mongoose = require('mongoose'); // init mongoose so it can use model
var User = mongoose.model('User'); //access  model through var User
module.exports = {
    register: function(req,res){ //register dict-key
        console.log("In my users");
        if (req.body.password != req.body.pw_confirm){ //passconf validation
            res.sendStatus(400);
        }else{
            var user = new User(req.body); //Take new user form data...
            user.save(function(err,user){ /// and save into user
                if (err){ // iff err -- log alert and render err
                    console.log('There were validation errors:', err)
                    res.json(err);
                }else{ // if yes....
                    req.session.user = { //set user session...
                      name: user.name, // save the name...
                      _id: user._id // save the id
                    }
                    console.log('We Good!');
                    res.sendStatus(200); // let us know we good
                }
            });
        }
    }, /// this is one dict object for ::register::

  login:function(req,res){
    var errors = {errors:{ //general????
      general:{  message:'Invalid login information'  }
    }} // if err, throw the valiation message

    User.findOne({email:req.body.email}).exec(function(err,user){ //check db for existing email
          //figure out what exactly that exec does
      if(!req.body.email||!req.body.password || !user){ // see if email, pass, user exists in db
        res.json(errors)
      }else{
        if(user.password != req.body.password){ // check for password
          res.json(errors);
        }else{
            req.session.user = { //set session ...
              name: user.name, //  save name ...
              _id: user._id  // save the id
            }
            console.log('5!GO!5!');
            res.send(user);
        }
      }
    })
  },  /// this is one dict object for ::login::


  getCurrent: function(req,res){
        //figure out what exactly that exec  (AND the rest of this function) does
    User.findOne({_id: req.session.user._id}).exec(function(err, user){
      if(err){
        res.sendStatus(400);
      }else{
        var u = {
            name:user.name,
           _id:user._id
         }
        res.json(u)
      }
    })
  }
}
