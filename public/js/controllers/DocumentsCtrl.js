myApp.controller('DocumentsCtrl', function($scope, $firebaseObject,$state,FIREBASE_URL,$firebaseArray) {
	var ref = new Firebase(FIREBASE_URL);
	var authData = ref.getAuth();
	var userRef = new Firebase(FIREBASE_URL + 'users/' + authData.uid );
    $scope.currentUser = $firebaseObject(userRef);

	var regRef = new Firebase(FIREBASE_URL).child('subjects');
    $scope.subjects = $firebaseArray(regRef);
});