angular.module('dziennikKosztow.services.LoginService', [])
    .service('LoginService', ['$log', '$http','$cookieStore', '$location', function ($log, $http, $cookieStore, $location) {

        return {
            login: function (user, $scope) {
                var url ='/oauth/token?grant_type=password'+'&username='+user.username+'&password='+user.password;
                $http({
                    url: url,
                    method: "POST",
                    headers : {'Content-Type': 'application/json', 'Authorization': 'Basic Z29oaWx1azpzZWNyZXQ='}
                })
                    .then(function (response) {
                        // success
                        console.log(response);
                        console.log("success login");
                        $scope.error = false;
                        $scope.loggedIn = true; // lub przerzuc na home
                        console.log(response.data.access_token);
                        $cookieStore.put('token', response.data.access_token);
                        $scope.showCars();
                        $location.path("/cars");
                    },
                    function (response) { // optional
                        // failed
                        console.log(response);
                        console.log("fail login");
                        $scope.error = true;
                    });
            }
        };

    }]);