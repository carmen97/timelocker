myApp.controller('RoomMessagesCtrl', function ($scope, $firebaseObject,$state,FIREBASE_URL,$firebaseArray) {
	var ref = new Firebase(FIREBASE_URL);
	var authData = ref.getAuth();
	var userRef = new Firebase(FIREBASE_URL + 'users/' + authData.uid );
    $scope.currentUser = $firebaseObject(userRef);
	$scope.roomId=$state.params.roomId;

	var ref = new Firebase(FIREBASE_URL).child('rooms').child($scope.roomId);
    
    
	$scope.currentRoom  = $firebaseObject(ref);
	var ref = new Firebase(FIREBASE_URL).child('roomMesages').child($scope.roomId);
    $scope.roomMessages = $firebaseArray(ref);
     	var usersRef = new Firebase(FIREBASE_URL + 'users');
    var users = $firebaseArray(usersRef);
    $scope.getDisplayname=function(uid){
    		return users.$getRecord(uid).lastname;
   	}
   	var timeStamp = Math.floor(Date.now());
   	$scope.sendMessage = function(message){
   		var ref = new Firebase(FIREBASE_URL);
   		var fbAuth = ref.getAuth();
    	$scope.currentUserid=fbAuth.uid;
		var ref = new Firebase(FIREBASE_URL).child('roomMesages').child($scope.roomId).push({
			body :message,
			date: timeStamp,
			uid:$scope.currentUserid
		})
         $scope.message = '';
 
	}
});