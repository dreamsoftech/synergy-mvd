app.controller('PurchaseOrdersCtrl' ,
    ['$scope', '$state', '$stateParams', '$timeout', function ($scope, $state, $stateParams, $timeout) {

        $scope.states = [
            {
                id: 1,
                name: 'AK'
            }, {
                id: 2,
                name: 'AL'
            }, {
                id: 3,
                name: 'CA'
            }, {
                id: 4,
                name: 'NY'
            }, {
                id: 5,
                name: 'TX'
            }, {
                id: 6,
                name: 'FL'
            }, {
                id: 7,
                name: 'HI'
            }, {
                id: 8,
                name: 'VA'
        }];

        $scope.isTextable = true;

        $scope.projects = [

        ];

        $scope.contracts = [

        ];

        $scope.sow = [

        ];

        $scope.procurements = [

        ];

        $scope.users = [
            {
                id: _.uniqueId(),
                name: 'Bruce Wayne'
            }
        ];

        $scope.comments = [
            {
                avatar: 'bruce.jpg',
                author: 'Bruce Wayne',
                date: 'Aug 16, 2015 - 10:29am',
                desc: 'No issues on my end here. I\'ll let you guy\'s resolve this. Let me know if you need any input!'
            }, {
                avatar: 'skylar.jpg',
                author: 'Christian Spendlove',
                date: 'Aug 17, 2015 - 9:16am',
                desc: 'Hi Jane, that should be no problem at all. I will look into the additional costs. It shouldn\'t be a big change...'
            }
        ];

    }]);
