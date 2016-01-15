app.controller('LoanCtrl' ,
    ['$scope', '$state', '$stateParams', '$timeout', '$uibModal', function ($scope, $state, $stateParams, $timeout, $uibModal) {
        $scope.$parent.setCurrentTab($state.current.name);

        $scope.sows = [
            {
                id: 1,
                name: "Wood Finish"
            }, {
                id: 2,
                name: "Duis mollis, est non commodo"
            }
        ];

        $scope.data = [
            {
                desc: 'Plans',
                sow: $scope.sows[0],
                loan_amount: 1000,
                drawn_date: 2272.85,
                pending_draws: '',
                amount_remaining: 1272.85,
                percent_drawn: -127.3,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Engineering',
                sow: $scope.sows[1],
                loan_amount: 800,
                drawn_date: 857.50,
                pending_draws: '',
                amount_remaining: 57.5,
                percent_drawn: -7.2,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Project Manager',
                sow: $scope.sows[0],
                loan_amount: 30000,
                drawn_date: 15000,
                pending_draws: 2500,
                amount_remaining: 15000,
                percent_drawn: 50.0,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Superintendent',
                sow: $scope.sows[1],
                loan_amount: 60000,
                drawn_date: 30000,
                pending_draws: 5000,
                amount_remaining: 30000,
                percent_drawn: 50.0,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'General Labor',
                sow: $scope.sows[1],
                loan_amount: 10000,
                drawn_date: 4000,
                pending_draws: 1000,
                amount_remaining: 6000,
                percent_drawn: 60.0,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Waste Disposal',
                sow: $scope.sows[1],
                loan_amount: 8500,
                drawn_date: 459.91,
                pending_draws: 615.90,
                amount_remaining: 8040.09,
                percent_drawn: 94.6,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Temp Saintary Facility',
                sow: $scope.sows[1],
                loan_amount: 2000,
                drawn_date: 1135.82,
                pending_draws: 603.65,
                amount_remaining: 864.18,
                percent_drawn: 43.2,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'TempOffice',
                sow: $scope.sows[1],
                loan_amount: 2000,
                drawn_date: 1635.55,
                pending_draws: 516,
                amount_remaining: 364.45,
                percent_drawn: 18.2,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Temp Heat',
                sow: $scope.sows[1],
                loan_amount: 3500,
                drawn_date: '',
                pending_draws: '',
                amount_remaining: 3500,
                percent_drawn: 100.0,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Temp Water',
                sow: $scope.sows[1],
                loan_amount: 1000,
                drawn_date: '',
                pending_draws: 213.64,
                amount_remaining: 1000,
                percent_drawn: 100,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Temp Power',
                sow: $scope.sows[1],
                loan_amount: 2000,
                drawn_date: 64.92,
                pending_draws: '',
                amount_remaining: 1935.08,
                percent_drawn: 96.8,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Rental Equipment',
                sow: $scope.sows[1],
                loan_amount: 8500,
                drawn_date: 8510.23,
                pending_draws: '',
                amount_remaining: 10.23,
                percent_drawn: -0.1,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Survey / Layout',
                sow: $scope.sows[1],
                loan_amount: 2500,
                drawn_date: 1320.49,
                pending_draws: '',
                amount_remaining: 1179.51,
                percent_drawn: 47.2,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Testing',
                sow: $scope.sows[1],
                loan_amount: 1000,
                drawn_date: '',
                pending_draws: '',
                amount_remaining: 1000,
                percent_drawn: 100.0,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Small Tools',
                sow: $scope.sows[1],
                loan_amount: 1500,
                drawn_date: '',
                pending_draws: 853.75,
                amount_remaining: 1500,
                percent_drawn: 100.0,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Snow Removal',
                sow: $scope.sows[1],
                loan_amount: 5000,
                drawn_date: '',
                pending_draws: '',
                amount_remaining: 5000,
                percent_drawn: 100.0,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Final Construction Clean Up',
                sow: $scope.sows[1],
                loan_amount: 10000,
                drawn_date: '',
                pending_draws: '',
                amount_remaining: 10000,
                percent_drawn: 100.0,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Crane',
                sow: $scope.sows[1],
                loan_amount: 6500,
                drawn_date: 1492.48,
                pending_draws: 1134.35,
                amount_remaining: 5007.52,
                percent_drawn: 77.0,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Material Handling',
                sow: $scope.sows[1],
                loan_amount: 8000,
                drawn_date: 178.16,
                pending_draws: 99.58,
                amount_remaining: 7821.84,
                percent_drawn: 97.8,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Project Materials',
                sow: $scope.sows[1],
                loan_amount: 10000,
                drawn_date: 278.25,
                pending_draws: 412.62,
                amount_remaining: 9721.75,
                percent_drawn: 97.2,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'LOD Fence',
                sow: $scope.sows[1],
                loan_amount: 1500,
                drawn_date: 1500,
                pending_draws: '',
                amount_remaining: '',
                percent_drawn: 0.0,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Excavation',
                sow: $scope.sows[1],
                loan_amount: 55000,
                drawn_date: 55000,
                pending_draws: '',
                amount_remaining: '',
                percent_drawn: 0.0,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Engineered Fill',
                sow: $scope.sows[1],
                loan_amount: 5000,
                drawn_date: 13137,
                pending_draws: '',
                amount_remaining: 8137,
                percent_drawn: -162.7,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Import',
                sow: $scope.sows[1],
                loan_amount: 5000,
                drawn_date: 3197.44,
                pending_draws: '',
                amount_remaining: 1802.56,
                percent_drawn: 36.1,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Export',
                sow: $scope.sows[1],
                loan_amount: 10000,
                drawn_date: '',
                pending_draws: '',
                amount_remaining: 10000,
                percent_drawn: 100.0,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Rock Walls',
                sow: $scope.sows[1],
                loan_amount: 25000,
                drawn_date: 4462.5,
                pending_draws: '',
                amount_remaining: 20537.5,
                percent_drawn: 82.2,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Sewer Vault / Pump',
                sow: $scope.sows[1],
                loan_amount: 17500,
                drawn_date: 17500,
                pending_draws: '',
                amount_remaining: '',
                percent_drawn: 0.0,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Landscaping',
                sow: $scope.sows[1],
                loan_amount: 30000,
                drawn_date: '',
                pending_draws: '',
                amount_remaining: 30000,
                percent_drawn: 100.0,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Footings & Foundation',
                sow: $scope.sows[1],
                loan_amount: 150000,
                drawn_date: 144165,
                pending_draws: '',
                amount_remaining: 5835,
                percent_drawn: 3.9,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Concrete Flatwork',
                sow: $scope.sows[1],
                loan_amount: 42500,
                drawn_date: 13642.50,
                pending_draws: '',
                amount_remaining: 28857.50,
                percent_drawn: 67.9,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Concrete Pumping',
                sow: $scope.sows[1],
                loan_amount: 5000,
                drawn_date: '',
                pending_draws: '',
                amount_remaining: 5000,
                percent_drawn: 100.0,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Exterior Stone Veneer',
                sow: $scope.sows[1],
                loan_amount: 165000,
                drawn_date: '',
                pending_draws: '',
                amount_remaining: 165000,
                percent_drawn: 100.0,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Structural Steel',
                sow: $scope.sows[1],
                loan_amount: 1000,
                drawn_date: '',
                pending_draws: '',
                amount_remaining: 1000,
                percent_drawn: 100.0,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Testing',
                sow: $scope.sows[1],
                loan_amount: 1000,
                drawn_date: '',
                pending_draws: '',
                amount_remaining: 1000,
                percent_drawn: 100.0,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Testing',
                sow: $scope.sows[1],
                loan_amount: 1000,
                drawn_date: '',
                pending_draws: '',
                amount_remaining: 1000,
                percent_drawn: 100.0,
                percent_complete: 68,
                percent_variance: 24
            }
        ];

        $scope.isEdit = false;

        $scope.save = function() {
            $scope.isEdit = false;
        };

        $scope.addLine = function() {
            if ($scope.isEdit) {
                $scope.data.push({
                    desc: '',
                    loan_amount: 0,
                    drawn_date: 0,
                    pending_draws: 0,
                    amount_remaining: 0,
                    percent_drawn: 0,
                    percent_complete: 0,
                    percent_variance: 0
                });
            }
        }

        $scope.showDeletionModal = function() {
            $scope.modalInstance = $uibModal.open({
                windowClass: "loan-deletion-modal",
                templateUrl: "partials/financials/deletion-confirmation-modal.html",
                scope: $scope,
                backdrop: 'static'
            });
        };

        $scope.cancel = function() {
            $scope.modalInstance.dismiss('cancel');
            $scope.isConfirmed = false;
        };

        $scope.delete = function() {
            if (!$scope.isConfirmed) {
                $scope.isConfirmed = true;
            } else {
                $scope.modalInstance.dismiss('cancel');
                $scope.isConfirmed = false;
            }
        };

    }]);
