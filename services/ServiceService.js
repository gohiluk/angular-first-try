angular.module('dziennikKosztow.services.ServiceService', [])
    .service('ServiceService', ['$log', '$http', function ($log, $http) {

        return {
            addService: function (service) {
                return $http.post("/api/service", service);
            },
            getServices: function(carId) {
                return $http.get('/api/service?carId='+carId);
            },
            getService: function(id, carId) {
                return $http.get('/api/service/'+id+'?carId='+carId);
            },
            updateService: function(service, id, carId) {
                return $http.post("/api/service/"+id+'?carId='+carId, service);
            }
        };

    }]);