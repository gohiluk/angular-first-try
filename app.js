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
            });

    });


angular.module('dziennikKosztow.controllers',
    [
        'dziennikKosztow.controllers.GlobalController',
        'dziennikKosztow.controllers.MainController',
        'dziennikKosztow.controllers.LoginController',
        'dziennikKosztow.controllers.RegisterController'
    ]);

angular.module('dziennikKosztow.services',
    [
        'dziennikKosztow.services.RegisterService',
        'dziennikKosztow.services.LoginService'
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
