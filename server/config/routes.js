// this is our routes.js file located 
// this is where we iwll define all of our routing rules


var friends = require("./../controllers/friends.js");


// we will have to require this in the server.js file and pass it app
module.exports = function(app){
	//verb: get, plural of target as the URI is the RESTful index method (it returns all friends)
	app.get('/friends', function (req, res){
		console.log('server friend')

		//calls controller
		friends.index(req, res);
	});
	app.post("/friends", function (req, res){
		friends.create(req, res);
	});
	app.delete("/destroy/:friendId", function (req, res){

		console.log("post delete route")
		friends.destroy(req, res)
	})
	app.put("/friends/:friendId", function (req, res){
		console.log(req.body)
		console.log(req.params)
		friends.patch(req, res)
	})
	// note how we are delegating to the controller and passing along req and res
}