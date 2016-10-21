var Friend = require('../models/friend');

module.exports = {
  index: function(req, res){
    Friend.find({}, function(err, friends){
    	if (err){
    		res.json(err);
    	}
    	else {
    		res.json(friends);
    	}
    });
  },
  create: function(req, res){
  	Friend.create(req.body, function(err, friend){
  		if (err){
  			//send the error back to factory, if any
        console.log(err);
  			res.json(err);
  		}
  		else {
  			//send the newly created friend back to factory, where factory will pass the new friend in the callback
  			res.json(friend);
  		}
  	})
  },
  update: function(req, res){
    var opts = { runValidators: true };
  	Friend.update({_id: req.params.id}, {firstName: req.body.firstName, lastName: req.body.lastName, dob: req.body.dob}, opts, function(err, friend){
  		if (err){
        console.log("update errors are: ", err);
  			res.json(err);
  		}
  		else {
  			res.json(friend);
  		}
  	})
  },
  show: function(req, res){
  	Friend.findById(req.params.id, function(err, friend){
  		if (err){
  			res.json(err);
  		}
  		else {
  			res.json(friend);
  		}
  	})
  },
  delete: function(req, res){
  	Friend.remove({_id: req.params.id}, function(err){
  		if (err){
  			res.json(err);
  		}
      else{
        res.json(true);
      }
  	})
  }
}
