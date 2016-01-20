app.directive('uiSelect', function ($compile) {
    return {
        restrict: 'E',
        scope: {
            options: '=',
            ngSelect: '&',
            selectedItem: '=',
            multiple: '@',
            hasFilter: '@',
            placeholder: '@',
            isDropdown: '@',
            searchPlaceholder: '@',
            flatStyle: '@'
        },
        templateUrl: 'content/js/directives/ui-select.html',
        link: function (scope, element, attrs) {
            scope.query = {};

            scope.selectVal = function(item, evt) {
                if (evt && scope.multiple)
                    evt.stopPropagation();

                if (scope.multiple) {
                    item = _.find(scope.options, function(e) { return e.id == item.id; });
                    item.checked = !item.checked;

                    scope.selectedItem = _.filter(scope.options, function(e) { return e.checked == true; });
                    if (!scope.isDropdown)
                        scope.selectedText = _.map(scope.selectedItem, 'name').join(', ');
                    scope.ngSelect({
                        selectedVal: _.map(scope.selectedItem, 'id')
                    });
                } else {
                    scope.selectedItem = angular.copy(item);
                    if (!scope.isDropdown)
                        scope.selectedText = item.name;
                    scope.ngSelect({
                        selectedVal: item.id
                    });
                }

            };
            if (!scope.selectedItem)
                scope.selectedText = scope.placeholder;

            if (!scope.isDropdown && scope.selectedItem)
                scope.selectVal(scope.selectedItem, null);
        }
    };
});
