app.controller('PunchItemListCtrl',
    ['$scope', function($scope) {
        $scope.punchItem = {
            state: "action-items.rfi.main",
            title: "RFI",
            total: 10,
            green: 3,
            orange: 2,
            red: 2,
            completed: {
                total: 10,
                done: 2
            },
            assignedMe: {
                green: {
                    total: 1,
                    done: 1
                },
                orange: {
                    total: 1,
                    done: 1,
                },
                red: {
                    total: 1,
                    done: 1
                }
            },
            listRequiredByMe: [
                {flag: 'red', title: 'Exposed Roof Section', sTitle: '', due_date: '8/17/2015', responsible: {name: 'Bruce Wayne', company: 'Synergy Construction'},initiator: {name: 'Dave Gebo', company: 'On Top Roofing'}, sow: ['Roof Dry-In'].join(", "), status: ['awating approval', 0]},
                {flag: 'yellow', title: 'Plumbing', sTitle: '', due_date: '8/19/2015', responsible: {name: 'Bruce Wayne', company: 'Synergy Construction'},initiator: {name: 'Christine Spendlove', company: 'Spendlove Plumbing'}, sow: ['Plumbing'].join(", "), status: ['awating approval', 0.3]},
                {flag: 'green', title: 'Hardwood Floor', sTitle: '', due_date: '9/25/2015', responsible: {name: 'Bruce Wayne', company: 'Synergy Construction'},initiator: {name: 'David Sokol', company: 'Rocky Mountain Ha...'}, sow: ['Hardwood Flooring'].join(", "), status: ['awating approval', 0.3]}
            ],

            listRequiredByOthers: [
                {flag: 'red', title: 'Garage Cement Finish', sTitle: '', due_date: '8/17/2015', responsible: {name: 'Jane Smith', company: ''},initiator: {name: 'Dale Guerra', company: 'All Concrete, Inc'}, sow: ['Concrete Flatwork'].join(', '), status: ['awating approval', 0.2]},
                {flag: 'yellow', title: 'Fire Sprinkler Materials', sTitle: '', due_date: '8/20/2015', responsible: {name: 'Beth Wiseman', company: 'Synergy Construction'},initiator: {name: 'Beth Wiseman', company: 'Synergy Construction'}, sow: ['Fire Sprinkler Rough-In'].join(', '), status: ['awating approval', 0]},
                {flag: 'green', title: 'Door Hinges', sTitle: '', due_date: '9/3/2015', responsible: {name: 'Jim White', company: 'All-Purpose Windo...'},initiator: {name: 'Beth Wiseman', company: 'Synergy Construction'}, sow: ['Interior Doors'].join(', '), status: ['awating approval', 0]},
                {flag: 'green', title: 'Insulation Question', sTitle: '', due_date: '9/15/2015', responsible: {name: 'Beth Wiseman', company: 'Synergy Construction'},initiator: {name: 'Mike Bearnson', company: 'Cardall\'s Insulation'}, sow: ['Insulation'].join(', '), status: ['awating approval', 0.3]}
            ],
            listDrafts: [
                {flag: 'draft', title: 'Landscaping Up-keep', sTitle: '', due_date: '-', responsible: {name: '-', company: ''},initiator: {name: 'Beth Wiseman', company: 'Synergy Construction'}, sow: ['Landscaping'].join(', '), status: ['Draft', '-']}
            ],
            listCompleted: [
                {flag: 'completed', title: 'North Side Area Dimensions', sTitle: '', due_date: '1/27/2015', responsible: {name: 'Bruce Wayne', company: 'Synergy Construction'},initiator: {name: 'Dan Meyer', company: 'Redoubt Excava...'}, sow: ['Site Excavation'].join(', '), status: ['Completed', 1]}
            ]
        };
    }]);