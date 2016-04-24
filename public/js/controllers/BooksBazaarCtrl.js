myApp.controller('BooksBazaarCtrl', function ($scope,FIREBASE_URL,$firebaseObject,$firebaseArray,$rootScope) {
	var ref = new Firebase(FIREBASE_URL);
	var authData = ref.getAuth();
	var userRef = new Firebase(FIREBASE_URL + 'users/' + authData.uid );
    $scope.currentUser = $firebaseObject(userRef);
     var ref = new Firebase(FIREBASE_URL).child('booksbazaar');
    $scope.booksbazaar = $firebaseArray(ref);
     $scope.booksbazaar.$loaded()
        .then(function() {
            angular.forEach($scope.booksbazaar, function(user) {
                console.log('Id celui care a postat este ' + user['poster']);
                var ref = new Firebase(FIREBASE_URL + '/users' + '/' + user['poster']);
                $rootScope.poster = $firebaseObject(ref);
            })
        });

    $scope.addbook = function(book){
      // $scope.book = book;
    console.log($scope.files[0].base64);  
     var timeStamp = Math.floor(Date.now());
     var ref = new Firebase(FIREBASE_URL);
    var fbAuth = ref.getAuth();
    $scope.currentUserid=fbAuth.uid;
    var ref = new Firebase(FIREBASE_URL).child('booksbazaar').push({
                an : book.an,
                
                autor : book.autor,
                categorie : book.categorie,

                data :timeStamp,
                image:$scope.files[0].base64,
                denumire:book.denumire,
                poster:$scope.currentUserid
          });
          $scope.addedBook = 'Book was added succesfully';
          $scope.book={};
    }
});