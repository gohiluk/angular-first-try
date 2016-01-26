angular.module('dziennikKosztow.controllers.ServiceController', [])
    .controller('ServiceController', function ($scope, $routeParams, ServiceService) {

        var now = new Date();
        $scope.service = {};
        $scope.service.serviceDate = now.getFullYear()+"-0"+(now.getMonth()+1)+"-"+now.getDate();

        $scope.addService = function() {
            $scope.service.carId = $routeParams.id;
            var service = $scope.service;
            var promise = ServiceService.addService(service);
            promise.then(
                function(payload) {
                    alert("success");
                },
                function(errorPayload) {
                    alert("error " + errorPayload);
                });
        }

    });