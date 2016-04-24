myApp.controller('LoginCtrl', function($scope,Authentication){
	
    $scope.login = function(user) {
  		Authentication.login(user);
  }; //login
});