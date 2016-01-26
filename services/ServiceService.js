angular.module('dziennikKosztow.services.ServiceService', [])
    .service('ServiceService', ['$log', '$http', function ($log, $http) {

        return {
            addService: function (service) {
                return $http.post("/api/service", service);
            },
            getServices: function(carId) {
                return $http.get('/api/service?carId='+carId);
            },
            getCar: function(id) {
                return $http.get('/api/cars/'+id);
            },
            updateCar: function(id, car) {
                var url ='/api/cars/'+id;
                var fd = new FormData();
                fd.append('name', car.name);
                if (car.picture) {
                    fd.append('picture', car.picture);
                }
                $http.post(url, fd, {
                    transformRequest: angular.identity,
                    headers: {'Content-Type': undefined}
                })
                    .success(function(){
                        alert("succesS");
                    })
                    .error(function(){
                        alert("error");
                    });
            }
        };

    }]);