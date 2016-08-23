// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('signin', {
      url: '/sign-in',
      templateUrl: 'templates/sign-in.html',
      controller: 'signInCtrl'
    })
    .state('forgotpassword', {
        url: '/forgot-password',
        templateUrl: 'templates/forgotPassword.html'
    })
    .state('tabs', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
    })
  /*
    .state('tabs.home', {
        url: '/home',
        views: {
        'home-tab': {
            templateUrl: 'templates/home.html',
            controller: 'homeTabCtrl'
            }
        }
    })
  */
    .state('tabs.home', {
        url: '/home',
        views: {
        'home-tab': {
            templateUrl: 'templates/home.html',
            controller: 'homeTabCtrl'
            }
        }
    })
  
    .state('tabs.locations', {
        url: '/locations',
        views: {
            'locations-tab': {
            templateUrl: 'templates/locations.html',
            controller: 'locationsTabCtrl'
            }
        }
    })
    .state('tabs.contact', {
        url: '/contact',
        views: {
            'contact-tab': {
            templateUrl: 'templates/contact.html',
            controller: 'contactTabCtrl'
            }
        }
    })
    .state('tabs.projects', {
        url: '/projects',
        views: {
            'projects-tab': {
            templateUrl: 'templates/projects.html',
            controller: 'projectsTabCtrl'
            }
        }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/sign-in');

});