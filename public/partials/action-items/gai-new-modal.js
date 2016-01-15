app.controller('GAINewModalCtrl',
    ['$scope', '$state', '$uibModalInstance', function($scope, $state, $uibModalInstance) {
        $scope.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        };

        $scope.distribute = function () {
            $uibModalInstance.close();
        }

        $scope.isShowDatePicker = false;
        $scope.selectedDate = new Date(2015, 7, 18);
        $scope.isMoreOptionsShow = false;

        $scope.projects = [
            {
                id: 1,
                name: "Wilmington 45"
            },
            {
                id: 1,
                name: "Wilmington 46"
            },
            {
                id: 1,
                name: "Wilmington 47"
            },
            {
                id: 1,
                name: "Wilmington 48"
            }
        ];

        $scope.assignee = [
            {
                id: 1,
                name: "Bruce Wayne"
            }, {
                id: 2,
                name: "Christian Peters"
            }, {
                id: 3,
                name: "Dan Bonker"
            }, {
                id: 4,
                name: "Dave Gebo"
            }, {
                id: 5,
                name: "Dave Musgrove"
            }, {
                id: 6,
                name: "Jane Smith"
            }, {
                id: 7,
                name: "Jeff Price"
            }, {
                id: 8,
                name: "John Steel"
            }, {
                id: 9,
                name: "Mary Beroset"
            }, {
                id: 10,
                name: "Mike Riley"
            }
        ];

        $scope.sow = [
            {
                id: 1,
                name: "Door Frames"
            },
            {
                id: 1,
                name: "Drywall"
            },
            {
                id: 1,
                name: "Fireplace Install"
            },
            {
                id: 1,
                name: "Fire Sprikler Rough In"
            },
            {
                id: 1,  
                name: "Form Footings"
            },
            {
                id: 1,
                name: "Form Foundation Walls"
            },
            {
                id: 1,
                name: "Frame 2nd Story"
            },
            {
                id: 1,
                name: "Insulation"
            },
            {
                id: 1,
                name: "Main Floor Overhead Lighting"
            },
            {
                id: 1,
                name: "Plumbing Rough In"
            },
            {
                id: 1,
                name: "Pour Foundation"
            },
            {
                id: 1,
                name: "Prime"
            },
            {
                id: 1,
                name: "Roof Dry-In"
            },
            {
                id: 1,
                name: "Rough Electrical"
            },
            {
                id: 1,
                name: "Rough Mechanical"
            },
            {
                id: 1,
                name: "Rough Plumbing"
            },
            {
                id: 1,
                name: "Set Steel"
            },
            {
                id: 1,
                name: "Stairway Floor Lighting"
            },
            {
                id: 1,
                name: "Snow Removal"
            }
        ];

}]);
