app.directive('projectFilter', function (projects) {
    return {
        restrict: 'E',
        scope: {
            currentProject: '=',
            ngSelect: '&'
        },
        templateUrl: 'partials/common/directives/project-filter/project-filter.html',
        link: function (scope, element, attrs) {
            allFilter = {
                id: 0,
                name: 'View All'
            };
            scope.projects = projects;
            scope.projects.splice(0, 0, allFilter);

            if (_.isUndefined(scope.currentProject))
                scope.currentProject = projects[3];
        }
    }
});