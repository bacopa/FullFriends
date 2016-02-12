// this is our friends.js file located at /server/controllers/friends.js
// note the immediate function and the object that is returned

// First add the following two lines at the top of the friends controller so that we can access our model through var Friend
// need to require mongoose to be able to run mongoose.model()
var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');



module.exports = (function() {
 return {
  index: function(req, res) {
  	console.log('index friends')
     Friend.find({}, function(err, results) {
       if(err) {
         console.log(err);
       } else {
       	console.log(results)
         res.json(results);
       }
   })
  },
  create: function(req, res) {
  	var friend  = new Friend({
  		name: req.body.name,
  		age: req.body.age
  	});
  	friend.save(function (err, res){
  		if(err){
  			console.log("Error while saving new friend... =(")
  		}
  		else {
  			console.log("Saved new friend")
  			console.log(friend)
  			
  		}
  	})
  },
  destroy: function(req, res) {
  	console.log("controller destroy, server side")
    console.log("here:")
    console.log(req.params.friendId)
    Friend.remove({_id: req.params.friendId}, function (err, data){
      if(err){console.log(err)}
        else{
          console.log("else")
          res.end();}

    })
  },
    patch: function(req, res) {
      console.log("server side PATCH!!!")
      // console.log(req.
      Friend.update({_id: req.params.friendId}body), 
      {
        $set: {
          name: req.body.name,
          age: req.body.age
        } 

      }, function (err, data){
          if(err){console.log(err)}
          else{
            console.log("patch else")
            res.end();
            // doesnt have put."/friends" so
            //cannot redirect
            // res.redirect("/friends")
          }
        }
    )
    // res.end();
    // res.redirect("/friends")
  }
 }
})();
// note that this is just a code snippet of the show method from the object returned in the controller (this includes the exports module.exports