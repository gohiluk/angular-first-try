angular.module('dziennikKosztow.services.RegisterService', [])
    .service('RegisterService', ['$log', '$http', function ($log, $http) {

        return {
            register: function (newUser, $scope) {
                // the query code here.
                $http({
                    url: '/api/register',
                    method: "POST",
                    data: JSON.stringify(newUser)
                })
                    .then(function (response) {
                        // success
                        console.log("success register");
                        $scope.registered = true;
                    },
                    function (response) { // optional
                        // failed
                        console.log("fail register");
                        $scope.registered = false;
                        $scope.error = true;
                    });
            }
        };

    }]);