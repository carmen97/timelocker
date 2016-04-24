 var myApp = angular.module('myApp', ['ui.router', 'firebase', 'angularPayments', 'ngMap','naif.base64','pdf','notifications','ui.calendar'])
     .constant('FIREBASE_URL', 'https://helpstudent.firebaseio.com/');

 myApp.config(function($stateProvider, $urlRouterProvider) {
     $stateProvider
         .state('intro', {
             url: '/intro',
             templateUrl: 'templates/intro.html'
         })
         .state('login', {
             url: '/login',
             templateUrl: 'templates/login.html',
             controller: 'LoginCtrl'
         })
         .state('account', {
             url: '/account',
             templateUrl: 'templates/dashboard/account.html',
             controller: 'AccountCtrl'
         })
         .state('payments', {
             url: '/payments',
             templateUrl: 'templates/dashboard/payments.html',
             controller: 'PaymentCtrl'
         })
         .state('campusmap', {
             url: '/campusmap',
             templateUrl: 'templates/dashboard/campusmap.html',
             controller: 'CampusMapCtrl'
         })
         .state('weather', {
             url: '/weather',
             templateUrl: 'templates/dashboard/weather.html',
             controller: 'WeatherCtrl'
         })
         .state('places', {
             url: '/places',
             templateUrl: 'templates/dashboard/places.html',
             controller: 'PlacesCtrl'
         })
         .state('news', {
             url: '/news',
             templateUrl: 'templates/dashboard/news.html',
             controller: 'NewsCtrl'
         })
         .state('booksbazaar', {
             url: '/booksbazaar',
             templateUrl: 'templates/dashboard/booksbazaar.html',
             controller: 'BooksBazaarCtrl'
         })
         .state('rooms', {
             url: '/rooms',
             templateUrl: 'templates/dashboard/rooms.html',
             controller: 'RoomsCtrl'
         })

         .state('messages', {
             url: '/rooms/:roomId',
             templateUrl: 'templates/dashboard/roomMessages.html',
             controller: 'RoomMessagesCtrl'
         })

        .state('recycle', {
             url: '/recycle',
             templateUrl: 'templates/dashboard/recycle.html',
             controller: 'RecycleCtrl'
         })
         .state('documents', {
             url: '/documents',
             templateUrl: 'templates/dashboard/documents.html',
             controller: 'DocumentsCtrl'
         })
        .state('viewdocument', {
             url: '/viewdocument/:documentId',
             templateUrl: 'templates/dashboard/viewdocument.html',
             controller: 'ViewDocumentCtrl'
         })
        .state('tasks', {
             url: '/tasks',
             templateUrl: 'templates/dashboard/tasks.html',
             controller: 'TasksCtrl'
         })
        .state('calendar', {
             url: '/calendar',
             templateUrl: 'templates/dashboard/calendar.html',
             controller: 'CalendarCtrl'
         })

     // if none of the above states are matched, use this as the fallback
     $urlRouterProvider.otherwise('/intro');

 });
