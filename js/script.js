// js/script.js
'use strict';


/**
 * D�claration de l'application appMeal
 */
var appMeal = angular.module('appMeal', [
    // D�pendances du "module"
    'ngRoute',
	'navControllers',
	'planningControllers',
	'listOfAlimentControllers',
	'starterControllers',
	'courseControllers',
	'dessertControllers',
	'breakfastControllers'
	
]);




/**
 * Configuration du module principal : appMeal
 */
appMeal.config(['$routeProvider',
    function($routeProvider) { 
        
        // Syst�me de routage
        $routeProvider
        .when('/planning/:msg?', {
            templateUrl: 'partials/planning.html',
            controller: 'planningCtrl'
        })
        .when('/listOfAliment', {
            templateUrl: 'partials/listOfAliment.html',
            controller: 'listOfAlimentCtrl'
        })
        .when('/starter', {
            templateUrl: 'partials/starter.html',
            controller: 'starterCtrl'
        })
        .when('/course', {
            templateUrl: 'partials/course.html',
            controller: 'courseCtrl'
        })
        .when('/dessert', {
            templateUrl: 'partials/dessert.html',
            controller: 'dessertCtrl'
        })
        .when('/breakfast', {
            templateUrl: 'partials/breakfast.html',
            controller: 'breakfastCtrl'
        })
        .otherwise({
            redirectTo: '/planning'
        });
    }
]);



