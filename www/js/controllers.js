angular.module('starter.controllers', [])

.controller('signInCtrl', function($scope, $state, $ionicViewSwitcher) {
    
    $scope.signIn = function(user) {
        console.log('Sign-In', user);
        $ionicViewSwitcher.nextDirection('back'); // 'forward', 'back', etc.
        $state.go('tabs.home');
    };
})

.controller('homeTabCtrl', function($scope) {
    console.log('homeTabCtrl');
})

.controller('locationsTabCtrl', function($scope, $state, $ionicViewSwitcher) {
    console.log('locationsTabCtrl');
    
    $scope.signOut = function() {
        console.log('Sign-Out');
        $ionicViewSwitcher.nextDirection('forward'); // 'forward', 'back', etc.
        $state.go('signin');
    };
})

.controller('contactTabCtrl', function($scope, $state, $ionicViewSwitcher) {
    console.log('contactTabCtrl');
    
    $scope.signOut = function() {
        console.log('Sign-Out');
        $ionicViewSwitcher.nextDirection('forward'); // 'forward', 'back', etc.
        $state.go('signin');
    };
})

.controller('projectsTabCtrl', function($scope, $state, $ionicViewSwitcher) {
    console.log('projectsTabCtrl');
    
    $scope.signOut = function() {
        console.log('Sign-Out');
        $ionicViewSwitcher.nextDirection('forward'); // 'forward', 'back', etc.
        $state.go('signin');
    };
});