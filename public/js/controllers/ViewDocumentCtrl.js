myApp.controller('ViewDocumentCtrl', function($scope, $rootScope, $firebaseObject, Authentication,  $firebaseArray,  $firebaseAuth, FIREBASE_URL,$state) {
  var ref = new Firebase(FIREBASE_URL).child('documents/'+$state.params.documentId);
  $scope.document= $firebaseObject(ref);
 
  $scope.pdfName = 'Relativity: The Special and General Theory by Albert Einstein';
  $scope.pdfUrl = 'pdf/relativity.pdf';
  $scope.scroll = 0;
  $scope.loading = 'loading';

  $scope.getNavStyle = function(scroll) {
    if(scroll > 100) return 'pdf-controls fixed';
    else return 'pdf-controls';
  }

  $scope.onError = function(error) {
    console.log(error);
  }

  $scope.onLoad = function() {
    $scope.loading = '';
  }

  $scope.onProgress = function(progress) {
    console.log(progress);
  }


});
