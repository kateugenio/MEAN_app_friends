App.controller('NewController', function($scope, FriendFactory, $location){

  $scope.errorsDob = '';
  $scope.errorsFn = '';
  $scope.errorsLn = '';
  $scope.errorDate = '';
  var errors = [];

  var today = new Date();

  $scope.createFriend = function(){
    if ($scope.newFriend.dob > today){
        $scope.errorDate = "Birthdate can't be greater than current date";
    }
    else {
      FriendFactory.createFriend($scope.newFriend)
      .then(function(serverResponse){
        console.log(serverResponse)
        if (serverResponse.data.errors){
          if (serverResponse.data.errors.firstName){
            console.log(serverResponse.data.errors.firstName.name);
            errors.push("first name can't be empty!");
          }
          if (serverResponse.data.errors.lastName){
            console.log(serverResponse.data.errors.lastName.name);
            errors.push("last name can't be empty!");
          }
          if (serverResponse.data.errors.dob){
            console.log(serverResponse.data.errors.dob.name);
            errors.push("birthdate can't be empty!");
          }
          if (errors.length > 0){
            console.log(errors);
            $scope.errorsDob = errors[0];
            $scope.errorsFn = errors[1];
            $scope.errorsLn = errors[2];
          }
        }
        else {
        $location.path('/');
        }
      })
      .catch(function(err){
        console.log(err);
      })
    }
  }
})
