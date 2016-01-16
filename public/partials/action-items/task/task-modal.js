app.controller('TaskModalCtrl',
    ['$scope', '$uibModalInstance', 'currentTask', function($scope, $uibModalInstance, currentTask) {
        $scope.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        };

        $scope.distribute = function () {
            $uibModalInstance.close();
        }
        $scope.task = currentTask;

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
                id: 2,
                name: "Drywall"
            },
            {
                id: 3,
                name: "Fireplace Install"
            },
            {
                id: 4,
                name: "Fire Sprikler Rough In"
            },
            {
                id: 5,  
                name: "Form Footings"
            },
            {
                id: 6,
                name: "Form Foundation Walls"
            },
            {
                id: 7,
                name: "Frame 2nd Story"
            },
            {
                id: 8,
                name: "Insulation"
            },
            {
                id: 9,
                name: "Main Floor Overhead Lighting"
            },
            {
                id: 10,
                name: "Plumbing Rough In"
            },
            {
                id: 11,
                name: "Pour Foundation"
            },
            {
                id: 12,
                name: "Prime"
            },
            {
                id: 13,
                name: "Roof Dry-In"
            },
            {
                id: 14,
                name: "Rough Electrical"
            },
            {
                id: 15,
                name: "Rough Mechanical"
            },
            {
                id: 16,
                name: "Rough Plumbing"
            },
            {
                id: 17,
                name: "Set Steel"
            },
            {
                id: 18,
                name: "Stairway Floor Lighting"
            },
            {
                id: 19,
                name: "Snow Removal"
            }
        ];

}]);
