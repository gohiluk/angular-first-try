angular.module('dziennikKosztow.controllers.RegisterController', [])
    .controller('RegisterController', function ($scope, RegisterService) {

        $scope.registered = false;
        $scope.error = false;

        $scope.submit = function () {
            var user = $scope.user;
            if (user) {
                var email = user.email;
                var password = user.password;

                if (email && password) {
                    console.log($scope.user);
                    RegisterService.register(user, $scope);
                }
            }
        }


    });