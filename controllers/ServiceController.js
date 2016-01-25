angular.module('dziennikKosztow.controllers.ServiceController', [])
    .controller('ServiceController', function ($scope, ServiceService) {

        var now = new Date();
        $scope.service = [];
        $scope.service.date = date = now.getFullYear()+"-0"+(now.getMonth()+1)+"-"+now.getDate();
        console.log($scope.service.date);

        $scope.addService = function() {
            var service = $scope.service;
            console.log(service);
        }

    });