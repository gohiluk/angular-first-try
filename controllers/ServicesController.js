angular.module('dziennikKosztow.controllers.ServicesController', [])
    .controller('ServicesController', function ($scope, $location, $routeParams, ServiceService) {

        $scope.loading = true;

        var promise = ServiceService.getServices($routeParams.id);
        promise.then(
            function(payload) {
                $scope.services = payload.data;
            },
            function(errorPayload) {
                alert("error " + errorPayload);
            }).finally(function() {
                $scope.loading = false;
            });


        $scope.addService = function() {
            $location.path("/cars/"+$routeParams.id+"/service");
        }

        $scope.editService = function(serviceId) {
            $location.path("/cars/"+$routeParams.id+"/service/"+serviceId);
        }

    });