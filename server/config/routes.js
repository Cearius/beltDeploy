// var app = angular.module('app', ['ngRoute']);
var users = require('./../controllers/users.js');
// var messages = require('./../controllers/messages.js');
// var comments = require('./../controllers/comments.js'); // require/embed controller
module.exports = function(app) {
// verb: get, plural of target as the URI is the RESTful index method (it returns all friends)
	app.post('/login', users.login)
	app.post('/users', users.register)

	app.use(userAuth); // middleware is declared to be used here

// below are all of the routes that use the middleware before invoking their functions
	app.get('/currentUser', users.getCurrent)
	// app.get('/message', messages.index)
	// app.post('/addMessage', messages.addMess)
	// app.post('/message/:id/comments', comments.create)
};


//userAuth middleware
function userAuth(req,res,next){
	if (req.session.user){
		next();
	}else{
		res.sendStatus(401);
	}
}
