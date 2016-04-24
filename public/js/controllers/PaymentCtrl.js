myApp.controller('PaymentCtrl', function($scope,FIREBASE_URL,$firebaseObject) {
    
 	var ref = new Firebase(FIREBASE_URL);
	var authData = ref.getAuth();
	var userRef = new Firebase(FIREBASE_URL + 'users/' + authData.uid );
    $scope.currentUser = $firebaseObject(userRef);
    Stripe.setPublishableKey('pk_test_HJZUEj2sdQHXj5FRdYtAs6J6');



    $scope.messagepayment = "";
    $scope.stripeCallback = function(code, result) {
        if (result.error) {
            $scope.messagepayment = "Your payment was unsuccessfull";
        } else {
            $scope.messagepayment = "Your payment was successfull";
            var ref = new Firebase(FIREBASE_URL);
			var authData = ref.getAuth();
			var userRef = new Firebase(FIREBASE_URL + 'users/' + authData.uid );
			console.log(authData.uid);
			var regRef = new Firebase(FIREBASE_URL + 'users/' + authData.uid + '/payments')
                .update({
                    payment_accomodation: 1
                }); //user info
        }

            /*
            var regRef = new Firebase(FIREBASE_URL + authData.uid + '/payments')
                .update({
                    payment_accomodation: 1
                }); //user info
        };*/
    }



})
