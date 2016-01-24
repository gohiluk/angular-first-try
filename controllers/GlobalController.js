angular.module('dziennikKosztow.controllers.GlobalController', [])
    .controller('GlobalController', function ($scope, $cookieStore) {

        var token = $cookieStore.get('token');
        $scope.showMyCars = false;
        if (token) {
            $scope.showMyCars = true;
        }

        $scope.logout = function() {
            alert('not implemented yet');
        }

        $scope.showCars = function() {
            $scope.showMyCars = true;
        }

        $scope.hideCars = function() {
            $scope.showMyCars = false;
        }
    });