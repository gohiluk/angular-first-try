angular.module('dziennikKosztow.controllers.GlobalController', [])
    .controller('GlobalController', function ($scope, $cookieStore) {

        var token = $cookieStore.get('token');
        if (token) {
            $scope.showMyCars = true;
        }

        $scope.logout = function() {
            aler('not implemented yet');
        }
    });