angular.module('dziennikKosztow.controllers.ServiceController', [])
    .controller('ServiceController', function ($scope, $routeParams, $location, ServiceService) {

        var now = new Date();
        $scope.service = {};
        $scope.service.serviceDate = now.getFullYear() + "-" + addZ(now.getMonth() + 1) + "-" + now.getDate();

        if ($routeParams.ids) {
            $scope.buttonOption = "Save changes";
            var promise = ServiceService.getService($routeParams.ids, $routeParams.id);
            promise.then(
                function (payload) {
                    var service = payload.data;
                    $scope.service = transformDate(service);
                },
                function (error) {
                    alert("error");
                }
            ).finally(
                function () {

                });
        } else {
            $scope.buttonOption = "Add service";
        }


        $scope.serviceAction = function () {
            if ($routeParams.ids) {
                editService();
            } else {
                addService();
            }
        };

        function addService() {
            $scope.service.carId = $routeParams.id;
            var service = $scope.service;
            var promise = ServiceService.addService(service);
            promise.then(
                function (payload) {
                    $location.path("/cars/" + $routeParams.id + "/services");
                },
                function (errorPayload) {
                    alert("error " + errorPayload);
                });
        }

        function editService() {
            var promise = ServiceService.updateService($scope.service, $routeParams.ids, $routeParams.id);
            promise.then(
                function (payload) {
                    $location.path("/cars/" + $routeParams.id + "/services");
                },
                function (errorPayload) {
                    alert("error " + errorPayload);
                });
        }

        function addZ(n) {
            return n < 10 ? '0' + n : '' + n;
        }

        function transformDate(service) {
            var date = new Date(service.serviceDate);
            service.serviceDate = date.getFullYear() + "-" + addZ(date.getMonth() + 1) + "-" + date.getDate();
            return service;
        }

    });