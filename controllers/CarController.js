angular.module('dziennikKosztow.controllers.CarController', [])
    .controller('CarController', function ($scope, $routeParams, CarService) {

        $scope.loading = true;

        var promise = CarService.getCar($routeParams.id);
        promise.then(
            function(payload) {
                $scope.car = payload.data;
            },
            function(errorPayload) {
                alert("error " + errorPayload);
            }).finally(function() {
                $scope.loading = false;
            });


        $scope.editCar = function() {
            var car = $scope.car;
            if (car) {
                CarService.updateCar($routeParams.id, car);
            }
        }

        $scope.loadImage = function() {
            var test = document.getElementById('imgInp');
            test.click();
        };
    });