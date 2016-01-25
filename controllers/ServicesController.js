angular.module('dziennikKosztow.controllers.ServicesController', [])
    .controller('ServicesController', function ($scope, $location, $routeParams, ServiceService) {

        $scope.loading = false;

        $scope.addService = function() {
            $location.path("/cars/"+$routeParams.id+"/service");
        }

    });