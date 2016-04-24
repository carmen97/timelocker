myApp.controller('RoomsCtrl',  function ($scope,$firebaseArray,$firebaseObject,FIREBASE_URL) {
	var ref = new Firebase(FIREBASE_URL);
	var authData = ref.getAuth();
	var userRef = new Firebase(FIREBASE_URL + 'users/' + authData.uid );
    $scope.currentUser = $firebaseObject(userRef);
	var ref = new Firebase(FIREBASE_URL).child('rooms');
    $scope.rooms = $firebaseArray(ref);
})