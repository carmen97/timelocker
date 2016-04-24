myApp.controller('CampusMapCtrl', function ($scope,NgMap,$rootScope,$firebaseObject,FIREBASE_URL) {
  var ref = new Firebase(FIREBASE_URL);
  var authData = ref.getAuth();
  var userRef = new Firebase(FIREBASE_URL + 'users/' + authData.uid );
    $scope.currentUser = $firebaseObject(userRef);
	/*NgMap.getMap().then(function(map) {
    $rootScope.map = map;
    });
   var vm=this;
    
    vm.faculties =[
      {pos:[47.152144,27.589073]},//Faculty of Civil Engineering
      {pos:[47.154012, 27.594180]},
      {pos:[47.153201, 27.594025]},
      {pos:[47.154055, 27.597844]},
      {pos:[47.1555496,27.6006723]},//Stinta si ingineria materialelor
      {pos:[47.155765, 27.598659]},//Faculty of Chemical Engineering and Environmental Protection
      {pos:[47.152642, 27.589604]},//Facultatea de Arhitectură G. M. Cantacuzino
      {pos:[]}//Facultatea de hidrotehnica
    
      ];
      vm.accomodation=[
      {pos:[47.156400, 27.604052]},//t17
      {pos:[47.157735, 27.604106]},//t19
      {pos:[47.156903, 27.605286]},//t1
      {pos:[47.156195, 27.606595]},//t3
      {pos:[47.154834, 27.608797]},//t7
      {pos:[47.155447, 27.609044]},//t15
      {pos:[47.157317, 27.605154]},//t21
      {pos:[47.154335, 27.606990]},//t10
      {pos:[47.155042,27.610343]}
     
    
      ];
      vm.cafetarie=[
      {pos:[47.154006,27.608122]}//cantina
      ]
      vm.station=[
       {pos:[47.156553, 27.603562]}
      ]*/
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
      {pos:[40.71, -74.21]},
      {pos:[40.72, -74.20]},
      {pos:[40.73, -74.19]},
      {pos:[40.74, -74.18]},
      {pos:[40.75, -74.17]},
      {pos:[40.76, -74.16]},
      {pos:[40.77, -74.15]}
    ];
     vm.faculties =[
      {pos:[47.152144,27.589073]},//Faculty of Civil Engineering
      {pos:[47.154012, 27.594180]},
      {pos:[47.153201, 27.594025]},
      {pos:[47.154055, 27.597844]},
      {pos:[47.1555496,27.6006723]},//Stinta si ingineria materialelor
      {pos:[47.155765, 27.598659]},//Faculty of Chemical Engineering and Environmental Protection
      {pos:[47.152642, 27.589604]},//Facultatea de Arhitectură G. M. Cantacuzino
      {pos:[]}//Facultatea de hidrotehnica
    
      ];
       vm.accomodation=[
      {pos:[47.156400, 27.604052]},//t17
      {pos:[47.157735, 27.604106]},//t19
      {pos:[47.156903, 27.605286]},//t1
      {pos:[47.156195, 27.606595]},//t3
      {pos:[47.154834, 27.608797]},//t7
      {pos:[47.155447, 27.609044]},//t15
      {pos:[47.157317, 27.605154]},//t21
      {pos:[47.154335, 27.606990]},//t10
      {pos:[47.155042,27.610343]}
     
    
      ];
      vm.cafetarie=[
      {pos:[47.154006,27.608122]}//cantina
      ]
      vm.station=[
       {pos:[47.156553, 27.603562]}
      ]
})