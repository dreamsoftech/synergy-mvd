app.controller('AuthCtrl',
    ['$scope', '$state', '$rootScope', function($scope, $state, $rootScope) {
        $scope.step = 'signup';

        $scope.createAccount = function() {
            $rootScope.currentUser = {};
            $state.go("dashboard");
        }
    }]);