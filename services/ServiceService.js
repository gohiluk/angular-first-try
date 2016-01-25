angular.module('dziennikKosztow.services.ServiceService', [])
    .service('ServiceService', ['$log', '$http', function ($log, $http) {

        return {
            addCar: function (car, callbackfun) {
                var url ='/api/cars';
                var fd = new FormData();
                fd.append('name', car.name);
                fd.append('picture', car.picture);
                $http.post(url, fd, {
                    transformRequest: angular.identity,
                    headers: {'Content-Type': undefined}
                })
                    .success(function(data){
                        callbackfun(data);
                    })
                    .error(function(){
                        alert("error");
                    });
            },
            getCars: function() {
                return $http.get('/api/getCars');
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