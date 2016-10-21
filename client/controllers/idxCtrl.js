App.controller('IndexController', function($scope, FriendFactory, $location){
  $scope.friends = [];

  function getAndAssignFriends(){
    FriendFactory.getFriends()
    .then( function(serverResponse){
      $scope.friends = serverResponse.data;
    })
  }
  getAndAssignFriends();

  $scope.deleteFriend = function(id){
  	FriendFactory.deleteFriend(id)
  	.then(getAndAssignFriends)
  	}
})
