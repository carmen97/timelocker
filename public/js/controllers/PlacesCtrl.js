myApp.controller('PlacesCtrl', function($scope, FIREBASE_URL, $firebaseObject) {
    var ref = new Firebase(FIREBASE_URL);
    var authData = ref.getAuth();
    var userRef = new Firebase(FIREBASE_URL + 'users/' + authData.uid);
    $scope.currentUser = $firebaseObject(userRef);


     var map;
    var infowindow;
    $scope.choice = '';
    $scope.cafe = function() {
    	console.log('dasdas');
        $scope.choice = 'cafe';
        $scope.init();
    }
    $scope.bars = function() {
        $scope.choice = 'bar';
        $scope.init();
    }
    $scope.hospitals = function() {
        $scope.choice = 'hospital';
        $scope.init();
    }
    $scope.bank = function() {
        $scope.choice = 'bank';
        $scope.init();
    }
    $scope.atm = function() {
        $scope.choice = 'atm';
        $scope.init();
    }
    $scope.taxi = function() {
        $scope.choice = 'taxi';
        $scope.init();
    }
    $scope.supermarket = function() {
        $scope.choice = 'store';
        $scope.init();
    }
    $scope.restaurant = function() {
            $scope.choice = 'restaurant';
            $scope.init();
        }
   
    $scope.init = function() {
        

        var latlon = new google.maps.LatLng(47.1322226, 27.571246100000053);
        mapCanvas = document.getElementById('mapholder');
        mapCanvas.style.height = '860px';
       

        map = new google.maps.Map(document.getElementById('mapholder'), {
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            center: latlon,
            zoom: 15
        });

        var currentMarker = new google.maps.Marker({
            map: map,
            position: latlon,
            icon: 'images/Standing Man-48.png',
            title: 'Current Location'
        });
         var myinfowindow = new google.maps.InfoWindow({
		    content: 'You are here'
		  });
		
		    myinfowindow.open(map, currentMarker);
		 	        

        if ($scope.choice != '') {
            var request = {
                location: latlon,
                radius: 7000,
                //  query: 'atm'
                types: [$scope.choice]
            };
            infowindow = new google.maps.InfoWindow();
            var service = new google.maps.places.PlacesService(map);
            service.nearbySearch(request, callback);

        }

    }
    function callback(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
                //console.log(results);
                createMarker(results[i]);
            }
        } else
            alert("Status not OK");
    }

    function createMarker(place) {
        // alert("createMarker function");
        if ($scope.choice == 'cafe') {
            var image = "images/Cafe-32.png";
        }
        if ($scope.choice == 'bar') {
            var image = "images/Cocktail-32.png";
        }
        if ($scope.choice == 'hospital') {
            var image = "images/Hospital 3-32.png";
        }
        if ($scope.choice == 'bank') {
            var image = "images/Bank-32.png";
        }
        if ($scope.choice == 'atm') {
            var image = "images/ATM-32.png";
        }
        if ($scope.choice == 'taxi') {
            var image = "images/Taxi-32.png";
        }
        if ($scope.choice == 'store') {
            var image = "images/Buy-32.png";
        }
        if ($scope.choice == 'restaurant') {
            var image = "images/WineGlass-32.png";
        }




        // var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';}
        var placeLoc = place.geometry.location;
        var marker = new google.maps.Marker({
            map: map,
            position: place.geometry.location,
            icon: image,
            animation: google.maps.Animation.DROP
        });

        google.maps.event.addListener(marker, 'click', function() {
            infowindow.setContent(place.name);
            infowindow.open(map, this);
        });
    }

});
