angular.module('dziennikKosztow.controllers.CarsController', [])
    .controller('CarsController', function ($scope, CarService) {

        //$scope.cars = [{name: "raz", picture: "!23"}];

        $scope.addCar = function() {
            var car = $scope.car;
            if (car) {
                var name = car.name;
                var picture = car.picture;

                if (name && picture) {


                    CarService.addCar(car, function(data) {
                        $('#carForm').slideToggle();
                        var src = document.getElementById('preview').src;
                        $scope.cars.push({id: data.id,name: name, picture: picture, base64String: src});
                        $scope.car.name = "";
                        $scope.car.picture = "";
                        document.getElementById('preview').setAttribute('src', '');
                    });
                }
            }
        };

        $scope.loadImage = function() {
            var test = document.getElementById('imgInp');
            test.click();
        };

        $scope.showCarForm = function() {
            $('#carForm').slideToggle();
        };

        var getCars = function() {
            /*CarService.getCars(function(dataResponse) {
                $scope.cars = dataResponse;
            });*/

            $scope.loading = true;

            var promise = CarService.getCars();
            promise.then(
                function(payload) {
                    $scope.cars = payload.data;
                },
                function(errorPayload) {
                    alert("error " + errorPayload);
                }).finally(function() {
                    $scope.loading = false;
                });
        };

        getCars();

    });