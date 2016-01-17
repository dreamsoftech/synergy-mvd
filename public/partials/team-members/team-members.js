app.controller('TeamMembersCtrl',  ['$scope', '$stateParams', '$uibModal', '$sce', function ($scope, $stateParams, $uibModal, $sce) {

    $scope.test = "hello world";

    $scope.showInviteModal = function() {
        var modalInstance = $uibModal.open({
            templateUrl: 'partials/team-members/invite-modal.html',
            controller: 'TeamMembersInviteCtrl',
            windowClass: 'tm-modal-main'
        });

        modalInstance.result.then(function (res) {
        }, function () {

        });
    }

    $scope.showProjectModal = function() {
        var modalInstance = $uibModal.open({
            templateUrl: 'partials/team-members/project-modal.html',
            controller: 'TeamMembersProjectCtrl',
            windowClass: 'tm-modal-main'
        });

        modalInstance.result.then(function (res) {
        }, function () {

        });
    }

    $scope.mike_sow_popover = $sce.trustAsHtml("<div>Main Floor Overhead Lighting<br>Rough Electrical<br>Stairway Floor Lighting</div>");
    $scope.dave_gebo_sow_popover = $sce.trustAsHtml("<div>Roof Dry-In<br>Set Steel</div>");
    $scope.dave_gebo_project_popover = $sce.trustAsHtml("<div>Wilmington 47<br>Wilmington 48</div>");
    $scope.bruce_wayne_project_popover = $sce.trustAsHtml("<div>Wilmington 45<br>Wilmington 46<br>Wilmington 47<br>Wilmington 48</div>");
    $scope.bruce_wayne_sow_popover = $sce.trustAsHtml("<div>Frame 2nd Story<br>Insulation<br>Snow Removal</div>");
    $scope.jeff_price_sow_popover = $sce.trustAsHtml("<div>Roof Dry-In<br>Set Steel</div>");
    $scope.jeff_price_project_popover = $sce.trustAsHtml("<div>Wilmington 47<br>Wilmington 48</div>");

}]);
