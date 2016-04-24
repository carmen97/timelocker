myApp.controller('WeatherCtrl', function ($scope,FIREBASE_URL, $firebaseObject) {
		var ref = new Firebase(FIREBASE_URL);
	var authData = ref.getAuth();
	var userRef = new Firebase(FIREBASE_URL + 'users/' + authData.uid );
    $scope.currentUser = $firebaseObject(userRef);


     $(document).ready(function() {
        $.simpleWeather({
            woeid: '2357536', //2357536
            location: 'Iasi',
            unit: 'c',
            success: function(weather) {
                $scope.city = weather.city;
                $scope.temp = weather.temp;
                $scope.windSpeed = weather.wind.speed;
                $scope.windDirection = weather.wind.direction;
                $scope.humidity = weather.humidity;
                $scope.currently = weather.currently;
                $scope.todayHigh = weather.high;
                $scope.todayLow = weather.low;
                $scope.textDescription = weather.text;
                $scope.thumbnail = weather.thumbnail;
                $scope.timeStamp = Math.floor(Date.now());
                $scope.weatherCode = weather.code;
                $scope.unitsTemp = weather.units.temp;
                html = '<h2><i id="iweather" class="icon-'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</h2>';
                $scope.forecasts = weather.forecast;
                console.log($scope.forecasts);
               $("#weather").html(html);
            },
            error: function(error) {
                $("#weather").html('<p>' + error + '</p>');
            }
        });
    });
})