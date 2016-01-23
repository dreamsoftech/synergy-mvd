app.controller('AuthCtrl',
    ['$scope', '$state', '$localStorage', function($scope, $state, $localStorage) {
        $scope.step = 'signup';

        $scope.createAccount = function() {
            $localStorage.currentUser = {};
            $state.go("dashboard");
        }
    }]);