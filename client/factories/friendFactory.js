App.factory('FriendFactory', function($http){
  var factory = {};

  factory.createFriend = function(newFriend){
    return $http.post('/friends', newFriend)
  }

  factory.getFriends = function(){
    return $http.get('/friends')
  }

  factory.getOneFriend = function(id){
  	return $http.get('/friends/'+id)
  }

  factory.updateFriend = function(id, data){
  	var friend = JSON.stringify(data);
  	return $http.put('/friends/'+id, friend)
  }

  factory.deleteFriend = function(id){
  	return $http.delete('/friends/'+id)
  }

  return factory;
})
