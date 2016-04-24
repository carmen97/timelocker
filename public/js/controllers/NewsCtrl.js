myApp.controller('NewsCtrl', function($scope, FIREBASE_URL, $firebaseArray,$firebaseObject) {
    var ref = new Firebase(FIREBASE_URL);
	var authData = ref.getAuth();
	var userRef = new Firebase(FIREBASE_URL + 'users/' + authData.uid );
    $scope.currentUser = $firebaseObject(userRef);
    var ref = new Firebase(FIREBASE_URL).child('events');
    $scope.events = $firebaseArray(ref);
    var ref = new Firebase(FIREBASE_URL).child('announcements');
    $scope.announcements = $firebaseArray(ref);
     var ref = new Firebase(FIREBASE_URL).child('opportunities');
    $scope.opportunities = $firebaseArray(ref);
    console.log($scope.announcements);

});
