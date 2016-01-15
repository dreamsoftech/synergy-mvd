/**
* Created by Anton on 12/14/2015
*/
app.controller('ProcurementCreateCtrl', ['$scope', '$state', function($scope, $state){
    $scope.procurementType = 'Ornare Cras';
    $scope.workScope = 'Ullamcorper Adipiscing';
    $scope.dateDue = 'Aug 23,2015';
    $scope.procurementNumber = 'PRO1393';
    $scope.dateInit = '8/23/14';
    $scope.creator = 'Bruce Wayne';
    $scope.procurementStatus = 'Awaiting Approval';
    $scope.selectionBy = {
        name: 'Eric Hoffman',
        date: 'Aug 29,2015'
    };
    $scope.procurementBy = {
        name: 'Bob Jones',
        date: 'Aug 29,2015'
    };
    $scope.approvalBy = {
        name: 'Kimball Frank',
        date: 'Aug 29,2015'
    };
    $scope.desc = 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Maecenas sed diam eget risus varius blandit sit amet non magna. Vestibulum id ligula porta felis euismod semper.';

    $scope.scopeList = [
        {
            id: 'CA',
            name: 'CA'
        },
        {
            id: 'NA',
            name: 'NA'
        }
    ];
    $scope.revisionRequested = true;

    $scope.procurement = [
        {
            id: 1,
            name: "Design"
        }, {
            id: 2,
            name: "Equipment"
        }, {
            id: 3,
            name: "Material"
        }
    ];

    $scope.category = [
        {
            id: 1,
            name: "Site Prep"
        }, {
            id: 2,
            name: "Foundation"
        }, {
            id: 3,
            name: "Framing"
        },
        {
            id: 3,
            name: "Rough-In"
        }, {
            id: 4,
            name: "Exterior Finishes"
        }, {
            id: 5,
            name: "Garage Doors"
        },
        {
            id: 6,
            name: "Roofing"
        }, {
            id: 7,
            name: "Windows & Doors"
        }, {
            id: 8,
            name: "Interior Trim"
        },
        {
            id: 9,
            name: "Paint"
        }, {
            id: 10,
            name: "Appliances"
        }, {
            id: 11,
            name: "Hardware"
        },
        {
            id: 12,
            name: "Floor Finishes"
        }, {
            id: 13,
            name: "Landscaping"
        }
    ];

    $scope.sow = [
        {
            id: 1,
            name: "Door Frames"
        }, {
            id: 2,
            name: "Drywall"
        }, {
            id: 3,
            name: "Fireplace Install"
        },
        {
            id: 4,
            name: "Fire Sprinkler Rough-In"
        }, {
            id: 5,
            name: "Form Footings"
        }, {
            id: 6,
            name: "Form Foundation Walls"
        },
        {
            id: 7,
            name: "Frame 2nd Stroy"
        }, {
            id: 8,
            name: "Insulation"
        }, {
            id: 9,
            name: "Main Floor Overhead"
        },
        {
            id: 10,
            name: "Lighting"
        }, {
            id: 11,
            name: "Plumbing Rough-In"
        }, {
            id: 12,
            name: "Pour Foundation"
        },
        {
            id: 13,
            name: "Prime"
        }, {
            id: 14,
            name: "Rough Dry In"
        }, {
            id: 15,
            name: "Rough Electrical"
        },
        {
            id: 16,
            name: "Rough Mechanical"
        }, {
            id: 17,
            name: "Rough Plumbing"
        }, {
            id: 18,
            name: "Set Steel"
        },
        {
            id: 19,
            name: "Stairway Floor Lighting"
        }, {
            id: 20,
            name: "Show Removal"
        }
    ];

    $scope.teamMembers = [
        {
            id: 1,
            name: "Bruce Wayne"
        }, {
            id: 2,
            name: "Christian Peters"
        }, {
            id: 3,
            name: "Dan Bonker"
        },
        {
            id: 4,
            name: "Dave Gebo"
        }, {
            id: 5,
            name: "Dave Musgrove"
        }, {
            id: 6,
            name: "Jane Smith"
        },
        {
            id: 7,
            name: "Jeff Price"
        }, {
            id: 8,
            name: "John Steel"
        }, {
            id: 9,
            name: "Mary Beroset"
        },
        {
            id: 10,
            name: "Mike Riley"
        }
    ];

    $scope.getClass = function(state) {
        var currentStep = parseInt($state.current.name.slice(-1));
        if (state == currentStep) {
            return 'wizard-active'
        }
        if (state < currentStep) {
            return 'wizard-past'
        }
        return 'wizard-step';
    };

    $scope.goNext = function() {
        var currentStep = parseInt($state.current.name.slice(-1));
        if (currentStep < 4) {
            nextStep = 'procurement.create.step' + (currentStep + 1);
            $state.go(nextStep);
        }
    };

    $scope.isFinal = function() {
        var currentStep = parseInt($state.current.name.slice(-1));
        if (currentStep == 4) {
            return true;
        }
        return false;
    }
}]);
