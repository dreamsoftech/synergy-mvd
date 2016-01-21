app.controller('UserProfileCtrl',
    ['$scope', '$uibModal', function($scope, $uibModal) {
        $scope.complianceInformation = [
            {
                id: _.uniqueId(),
                credit: {flag: 'flag_green.png', attachments: 1, date: 'Jun 30, 2015'},
                insurance: {flag: 'red_icon.png', attachments: 2, date: 'Jun 30, 2015'},
                licence: {flag: 'red_icon.png', attachments: 1, date: 'May 9, 2015'},
                judgement: {flag: 'red_icon.png', attachments: 0, date: 'Oct 9, 2014'},
                background: {flag: 'flag_green.png', attachments: 1, date: 'Jun 30, 2015'},
                status: 'Out of Compliance'
            }, {
                id: _.uniqueId(),
                credit: {flag: 'flag_green.png', attachments: 1, date: 'Jun 30, 2015'},
                insurance: {flag: 'red_icon.png', attachments: 2, date: 'Jun 30, 2015'},
                licence: {flag: 'red_icon.png', attachments: 1, date: 'May 9, 2015'},
                judgement: {flag: 'red_icon.png', attachments: 0, date: 'Oct 9, 2014'},
                background: {flag: 'flag_green.png', attachments: 1, date: 'Jun 30, 2015'},
                status: 'In Compliance'
            }, {
                id: _.uniqueId(),
                credit: {flag: 'flag_green.png', attachments: 1, date: 'Jun 30, 2015'},
                insurance: {flag: 'red_icon.png', attachments: 2, date: 'Jun 30, 2015'},
                licence: {flag: 'red_icon.png', attachments: 1, date: 'May 9, 2015'},
                judgement: {flag: 'red_icon.png', attachments: 0, date: 'Oct 9, 2014'},
                background: {flag: 'flag_green.png', attachments: 1, date: 'Jun 30, 2015'},
                status: 'Out of Compliance'
            }, {
                id: _.uniqueId(),
                credit: {flag: 'flag_green.png', attachments: 1, date: 'Jun 30, 2015'},
                insurance: {flag: 'red_icon.png', attachments: 2, date: 'Jun 30, 2015'},
                licence: {flag: 'red_icon.png', attachments: 1, date: 'May 9, 2015'},
                judgement: {flag: 'red_icon.png', attachments: 0, date: 'Oct 9, 2014'},
                background: {flag: 'flag_green.png', attachments: 1, date: 'Jun 30, 2015'},
                status: 'Out of Compliance'
            }
        ];

        $scope.actionItems = [
            {
                flag: 'red_icon.png',
                title: 'Measure and Mark the Wall',
                sTitle: 'Secure Ledger Board',
                due_date: 'May 23, 2015',
                initiator: {
                    name: 'Bob Jones',
                    company: 'ABC Inc'
                },
                sow: 'Measure and mark the wall',
                status: 'In Process',
                status_completion: 24
            }, {
                flag: 'red_icon.png',
                title: 'Bring New Tools',
                sTitle: 'Secure Ledger Board',
                due_date: 'Jun 14, 2015',
                initiator: {
                    name: 'Jim Stevens',
                    company: 'ABC Inc'
                },
                sow: 'Bring new tools for crew',
                status: 'Pending',
                status_completion: 80
            }, {
                flag: 'red_icon.png',
                title: 'Have Crew Meet Daily',
                sTitle: 'Secure Ledger Board',
                due_date: 'May 23, 2015',
                initiator: {
                    name: 'Bob Jones',
                    company: 'ABC Inc'
                },
                sow: 'Measure and mark the wall',
                status: 'Draft',
                status_completion: 24
            }, {
                flag: 'yellow _icon.png',
                title: 'Get Lumber For New Build',
                sTitle: 'Secure Ledger Board',
                due_date: 'May 23, 2015',
                initiator: {
                    name: 'Bob Jones',
                    company: 'ABC Inc'
                },
                sow: 'Measure and mark the wall',
                status: 'In Process',
                status_completion: 80
            }, {
                flag: 'yellow _icon.png',
                title: 'Measure and Mark the Wall',
                sTitle: 'Secure Ledger Board',
                due_date: 'May 23, 2015',
                initiator: {
                    name: 'Bob Jones',
                    company: 'ABC Inc'
                },
                sow: 'Measure and mark the wall',
                status: 'In Process',
                status_completion: 24
            }, {
                flag: 'yellow _icon.png',
                title: 'Bring Old Tools',
                sTitle: 'Secure Ledger Board',
                due_date: 'May 23, 2015',
                initiator: {
                    name: 'Bob Jones',
                    company: 'ABC Inc'
                },
                sow: 'Measure and mark the wall',
                status: 'In Process',
                status_completion: 80
            }, {
                flag: 'flag_green.png',
                title: 'Check Blueprints',
                sTitle: 'Secure Ledger Board',
                due_date: 'May 23, 2015',
                initiator: {
                    name: 'Bob Jones',
                    company: 'ABC Inc'
                },
                sow: 'Measure and mark the wall',
                status: 'In Process',
                status_completion: 24
            }
        ];

        $scope.currentProjects = [
            {
                name: 'Project name goes here',
                role: 'SubContractor',
                sow: 'Scope of work name goes here',
                sow_completion: 48,
                onsite: 'YES'
            }, {
                name: 'Project name goes here',
                role: 'SubContractor',
                sow: 'Scope of work name goes here',
                sow_completion: 48,
                onsite: 'YES'
            }
        ];

        $scope.completedProjects = [
            {
                name: 'Project name goes here',
                role: 'SubContractor',
                sow: 'Scope of work name goes here'
            }, {
                name: 'Project name goes here',
                role: 'SubContractor',
                sow: 'Maecenas sed diam eget risus varius blandit sit '
            }
        ];

        $scope.isTwoStepSecurity = true;

    }]);
