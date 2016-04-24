myApp.controller('AccountCtrl', function ($scope,$rootScope,FIREBASE_URL,$firebaseObject) {
	 var ref = new Firebase(FIREBASE_URL);
	var authData = ref.getAuth();
	var userRef = new Firebase(FIREBASE_URL + 'users/' + authData.uid );
    $scope.currentUser = $firebaseObject(userRef);
	console.log($scope.currentUser);
});