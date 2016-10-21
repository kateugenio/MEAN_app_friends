App.controller('ShowController', function($scope, FriendFactory, $routeParams){

	$scope.friend = '';
	$scope.dob = [];

	function showFriend(){
		FriendFactory.getOneFriend($routeParams.id)
		.then(function(serverResponse){
			console.log(serverResponse.data.dob);
			var dob = new Date(serverResponse.data.dob);
			var dob = dob.toDateString().substring(4,15);
			$scope.dob = dob;
			$scope.friend = serverResponse.data;
		})
		.catch(function(err){
			console.log(err);
		})
	}
	showFriend();
})