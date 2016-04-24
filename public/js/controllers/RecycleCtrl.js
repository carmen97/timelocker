myApp.controller('RecycleCtrl', function ($scope,FIREBASE_URL, $firebaseObject) {
	var ref = new Firebase(FIREBASE_URL);
	var authData = ref.getAuth();
	var userRef = new Firebase(FIREBASE_URL + 'users/' + authData.uid );
    $scope.currentUser = $firebaseObject(userRef);
	var vm=this;
	vm.data =[
      {foo:1, bar:1},
      {foo:2, bar:2},
      {foo:3, bar:3},
      {foo:4, bar:4},
      {foo:5, bar:5},
      {foo:6, bar:6},
      {foo:7, bar:7}
    ];
    vm.positions =[
      {pos:[44.440614, 26.130496]},
      {pos:[46.603195, 26.877566

]},
      {pos:[46.784047, 23.449832]},
      {pos:[47.158805, 27.573999]},
      {pos:[45.760047, 21.249668]},
      {pos:[45.408936, 22.220671]},
      {pos:[40.77, -74.15]}
    ];
    vm.showData = function() {
      alert(this.data.foo);
    }

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
            $scope.messagepayment = "Thanks for your donation.Your payment was successfull";
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