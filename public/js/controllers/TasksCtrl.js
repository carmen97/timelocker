myApp.controller('TasksCtrl', function ($scope,FIREBASE_URL,$firebaseObject,$notification, $timeout, $firebaseArray) {
 console.log('main ctrl started');
   var ref = new Firebase(FIREBASE_URL).child('users').child('1ca6e6bc-4171-4162-9d61-3c00087f1dd6').child('tasks').push({
        	name:'asd',
        	duration:25,
        	status:1
        })

    $scope.gimmeHTML5 = function(){
      $notification.enableHtml5Mode();
    };

    $scope.makeInfo = function(){
      if($scope.notiTitle !== '' || $scope.notiText !== ''){
        $notification.info($scope.notiTitle, $scope.notiText);
        $scope.notiText = '';
        $scope.notiTitle = '';
      }
    };

    $scope.makeWarning = function(){
      if($scope.notiTitle !== '' || $scope.notiText !== ''){
        $notification.warning($scope.notiTitle, $scope.notiText);
        $scope.notiText = '';
        $scope.notiTitle = '';
      }
    };

    $scope.makeError = function(){
      if($scope.notiTitle !== '' || $scope.notiText !== ''){
        $notification.error($scope.notiTitle, $scope.notiText);
        $scope.notiText = '';
        $scope.notiTitle = '';
      }
    };

  

	  	 var ref = new Firebase(FIREBASE_URL);
	var authData = ref.getAuth();
	var userRef = new Firebase(FIREBASE_URL + 'users/' + authData.uid );
    $scope.currentUser = $firebaseObject(userRef);
  
var ref = new Firebase(FIREBASE_URL).child('usersw').child('1ca6e6bc-4171-4162-9d61-3c00087f1dd6').child('tasks');
$scope.tasks = $firebaseArray(ref);
console.log($scope.tasks);

  $scope.play=1;
   $scope.seconds = 10;
   $scope.break=0;
    var countdown = $("#countdown").countdown360({
        radius: 80,
        seconds: $scope.seconds,
        label: ['sec', 'secs'],
        fontColor: '#FFFFFF',
        autostart: false,

        onComplete: function() {
        	 var sound = new Howl({
  urls: ['sound/clock.mp3']
}).play();
        	 $timeout(function(){
      $notification.success('Congratulations!', 'You can now take a break');
    }, 500);

           console.log('dasssad');
           
          
           
           
        }
    });

    countdown.start();
    countdown.stop() ;

    $scope.train = function() {

    	$scope.current = 1;
        countdown.start();
        $scope.play = 1;
       
        console.log($scope.play);
    }
    
    $scope.stop = function(){
    	countdown.stop();
    	
    	countdown.start();
    	countdown.stop() ;
    	$scope.current = undefined;
        $scope.play = 0; 
    }
    $scope.counterinit = function(){
        countdown.stop();
    	countdown.start();
        countdown.stop() ;
        $scope.play = 0; 
    }

    $scope.break  = function(){
        $scope.break=1;
    
     countdown.start();
    
    }
    $scope.test = function(){
       $scope.stop();
    }	



})


