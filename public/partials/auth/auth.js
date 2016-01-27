app.controller('AuthCtrl',
    ['$scope', '$state', '$rootScope', '$localStorage', function($scope, $state, $rootScope, $localStorage) {
        $scope.step = 'signup';

        $scope.createAccount = function() {
            $localStorage.currentUser = {};
            $rootScope.currentUser = {};
            $state.go("dashboard");
        }

        $scope.signIn = function() {
            $localStorage.currentUser = {};
            $rootScope.currentUser = {};
            $state.go("dashboard");
        }

        $scope.months = [
            {id: 1, name: '1-Jan'},
            {id: 2, name: '2-Feb'},
            {id: 3, name: '3-Mar'},
            {id: 4, name: '4-Apr'},
            {id: 5, name: '5-May'},
            {id: 6, name: '6-Jun'},
            {id: 7, name: '7-Jul'},
            {id: 8, name: '8-Aug'},
            {id: 9, name: '9-Sep'},
            {id: 10, name: '10-Oct'},
            {id: 11, name: '11-Nov'},
            {id: 12, name: '12-Dec'},
        ];

        $scope.years = _.times(10, function(e){
            return {id: e, name: moment().year() + e};
        });

        $scope.states = [
            {id: "AL", name: "Alabama"},
            {id: "AK", name: "Alaska"},
            {id: "AS", name: "American Samoa"},
            {id: "AZ", name: "Arizona"},
            {id: "AR", name: "Arkansas"},
            {id: "CA", name: "California"},
            // {id: "CO", name: "Colorado"},
            // {id: "CT", name: "Connecticut"},
            // {id: "DE", name: "Delaware"},
            // {id: "DC", name: "District Of Columbia"},
            // {id: "FM", name: "Federated States Of Micronesia"},
            // {id: "FL", name: "Florida"},
            // {id: "GA", name: "Georgia"},
            // {id: "GU", name: "Guam"},
            // {id: "HI", name: "Hawaii"},
            // {id: "ID", name: "Idaho"},
            // {id: "IL", name: "Illinois"},
            // {id: "IN", name: "Indiana"},
            // {id: "IA", name: "Iowa"},
            // {id: "KS", name: "Kansas"},
            // {id: "KY", name: "Kentucky"},
            // {id: "LA", name: "Louisiana"},
            // {id: "ME", name: "Maine"},
            // {id: "MH", name: "Marshall Islands"},
            // {id: "MD", name: "Maryland"},
            // {id: "MA", name: "Massachusetts"},
            // {id: "MI", name: "Michigan"},
            // {id: "MN", name: "Minnesota"},
            // {id: "MS", name: "Mississippi"},
            // {id: "MO", name: "Missouri"},
            // {id: "MT", name: "Montana"},
            // {id: "NE", name: "Nebraska"},
            // {id: "NV", name: "Nevada"},
            // {id: "NH", name: "New Hampshire"},
            // {id: "NJ", name: "New Jersey"},
            // {id: "NM", name: "New Mexico"},
            // {id: "NY", name: "New York"},
            // {id: "NC", name: "North Carolina"},
            // {id: "ND", name: "North Dakota"},
            // {id: "MP", name: "Northern Mariana Islands"},
            // {id: "OH", name: "Ohio"},
            // {id: "OK", name: "Oklahoma"},
            // {id: "OR", name: "Oregon"},
            // {id: "PW", name: "Palau"},
            // {id: "PA", name: "Pennsylvania"},
            // {id: "PR", name: "Puerto Rico"},
            // {id: "RI", name: "Rhode Island"},
            // {id: "SC", name: "South Carolina"},
            // {id: "SD", name: "South Dakota"},
            // {id: "TN", name: "Tennessee"},
            // {id: "TX", name: "Texas"},
            // {id: "UT", name: "Utah"},
            // {id: "VT", name: "Vermont"},
            // {id: "VI", name: "Virgin Islands"},
            // {id: "VA", name: "Virginia"},
            // {id: "WA", name: "Washington"},
            // {id: "WV", name: "West Virginia"},
            // {id: "WI", name: "Wisconsin"},
            // {id: "WY", name: "Wyoming"}
        ];

        $scope.countries = [
            {id: 'US', name: 'United States'},
            {id: 'CA', name: 'Canada'}
        ];
    }]);