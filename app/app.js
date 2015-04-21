'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
  'ngRoute',
  'myApp.version',
  'ui.calendar'
]);

myApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/'});
}]);

myApp.run(['$rootScope', function ($rootScope) {

  $rootScope.eventSources = [

  ];

  $rootScope.uiConfig = {
    calendar:  {
      editable: false,
      header: {
        left: 'prev,next today',
        center: 'title',
        right: ''
      },
      events: function(start, end, timezone, callback) {
        var eventList = [
          {
            title: 'All Day Event',
            start: '2015-04-15'
          },
          {
            title: 'Long Event',
            start: '2015-04-20'
          }
        ];
        callback(eventList);
      }
    }
  }

}]);
