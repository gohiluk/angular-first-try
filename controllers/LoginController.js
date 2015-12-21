angular.module('dziennikKosztow.controllers.LoginController', [])
    .controller('LoginController', function ($scope, LoginService) {

        $scope.error = false;
        $scope.loggedIn = false;

        $scope.submit = function () {
            var user = $scope.user;
            if (user) {
                var username = user.username;
                var password = user.password;

                if (username && password) {
                    console.log($scope.user);
                    LoginService.login(user, $scope);
                }
            }
        }

    });