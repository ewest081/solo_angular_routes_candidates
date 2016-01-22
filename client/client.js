/**
 * Created by lizwestberg on 1/21/16.
 */
var app = angular.module('clientApp', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/overview.html',
            controller: 'OverviewController'
        })
        .when('/bernie', {
            templateUrl: 'views/bernie.html',
            controller: 'BernieController'
        })
        .when('/hillary', {
            templateUrl: 'views/hillary.html',
            controller: 'HillaryController'
        })
        .when('/trump', {
            templateUrl: 'views/trump.html',
            controller: 'TrumpController'
        })
        .when('/cruz', {
            templateUrl: 'views/cruz.html',
            controller: 'CruzController'
        });

    $locationProvider.html5Mode(true);
}]);

app.controller('OverviewController', ['$scope', function($scope) {

}]);

app.controller('BernieController', ['$scope', function($scope) {

}]);

app.controller('HillaryController', ['$scope', function($scope) {

}]);

app.controller('TrumpController', ['$scope', function($scope) {

}]);

app.controller('CruzController', ['$scope', function($scope) {

}]);