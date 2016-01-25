var myapp = angular.module('dziennikKosztow', ['ui.bootstrap', 'ngRoute', 'dziennikKosztow.controllers', 'dziennikKosztow.services', 'ngCookies'])

    .config(function ($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl: 'pages/home.html',
                controller: 'MainController'
            })

            // route for the about page
            .when('/login', {
                templateUrl: 'pages/login.html',
                controller: 'LoginController'
            })

            .when('/register', {
                templateUrl: 'pages/register.html',
                controller: 'RegisterController'
            })

            .when('/cars', {
                templateUrl: 'pages/cars.html',
                controller: 'CarsController'
            })

            .when('/cars/:id', {
                templateUrl: 'pages/car.html',
                controller: 'CarController'
            })

            .when('/cars/:id/services', {
                templateUrl: 'pages/services.html',
                controller: 'ServicesController'
            })

            .when('/cars/:id/service', {
                templateUrl: 'pages/service.html',
                controller: 'ServiceController'
            })

            .when('/logout', {
                templateUrl: 'pages/logout.html',
                controller: 'LogoutController'
            });

    });


angular.module('dziennikKosztow.controllers',
    [
        'dziennikKosztow.controllers.GlobalController',
        'dziennikKosztow.controllers.MainController',
        'dziennikKosztow.controllers.LoginController',
        'dziennikKosztow.controllers.RegisterController',
        'dziennikKosztow.controllers.CarsController',
        'dziennikKosztow.controllers.CarController',
        'dziennikKosztow.controllers.ServicesController',
        'dziennikKosztow.controllers.ServiceController',
        'dziennikKosztow.controllers.LogoutController'
    ]);

angular.module('dziennikKosztow.services',
    [
        'dziennikKosztow.services.RegisterService',
        'dziennikKosztow.services.LoginService',
        'dziennikKosztow.services.CarService',
        'dziennikKosztow.services.ServiceService'
    ]);

myapp.factory('httpRequestInterceptor', function ($cookieStore) {
    return {
        request: function (config) {
            //config.url =  URI(config.url).addSearch({'_auth_token':token}).toString();

            var token = $cookieStore.get('token');
            if (token) {
                console.log("token znalezion w cookiesach: " + token);
                config.headers['Authorization'] = "Bearer " + token;
            } else {
                console.log("brak tokena");
            }

            return config;
        }
    };
});

myapp.config(['$httpProvider', function ($httpProvider) {

    $httpProvider.interceptors.push('httpRequestInterceptor');

    $httpProvider.defaults.headers.post['Accept'] = 'application/json, text/javascript';
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';

    $httpProvider.defaults.headers.common['Accept'] = 'application/json, text/javascript';
    $httpProvider.defaults.headers.common['Content-Type'] = 'application/json; charset=utf-8';
    $httpProvider.defaults.useXDomain = true;
}]);

myapp.directive("fileread", [function () {
    return {
        scope: {
            fileread: "="
        },
        link: function (scope, element, attributes) {
            element.bind("change", function (changeEvent) {
                var reader = new FileReader();
                reader.onload = function (loadEvent) {
                    scope.$apply(function () {
                        //scope.fileread = loadEvent.target.result;
                        //scope.fileread = changeEvent.target.files[0];
                        document.getElementById('preview').setAttribute('src', loadEvent.target.result);
                    });
                };
                reader.readAsDataURL(changeEvent.target.files[0]);
                scope.fileread = changeEvent.target.files[0];
            });
        }
    }
}]);

myapp.directive('fileModel', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;

            element.bind('change', function () {
                scope.$apply(function () {
                    modelSetter(scope, element[0].files[0]);
                });
            });
        }
    };
}]);