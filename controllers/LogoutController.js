angular.module('dziennikKosztow.controllers.LogoutController', [])
    .controller('LogoutController', function ($scope, $cookieStore) {

        $cookieStore.remove('token');
        $scope.hideCars();

        //todo
        //request to /oauth/logout
    }
);