// js/script.js
'use strict';


/**
 * Déclaration de l'application appMeal
 */
var appMeal = angular.module('appMeal', [
    // Dépendances du "module"
    'ngRoute',
	'navControllers',
	'planningControllers',
	'listOfAlimentControllers',
	'starterControllers',
	'courseControllers',
	'dessertControllers',
	'breakfastControllers',
	'testDirectiveControllers'
	
]);




/**
 * Configuration du module principal : appMeal
 */
appMeal.config(['$routeProvider',
    function($routeProvider) { 
        
        // Système de routage
        $routeProvider
        .when('/planning/:msg?', {
            templateUrl: 'section/planning/planning.html',
            controller: 'planningCtrl'
        })
        .when('/listOfAliment', {
            templateUrl: 'section/listOfAliment/listOfAliment.html',
            controller: 'listOfAlimentCtrl'
        })
        .when('/starter', {
            templateUrl: 'section/starter/starter.html',
            controller: 'starterCtrl'
        })
        .when('/course', {
            templateUrl: 'section/course/course.html',
            controller: 'courseCtrl'
        })
        .when('/dessert', {
            templateUrl: 'section/dessert/dessert.html',
            controller: 'dessertCtrl'
        })
        .when('/breakfast', {
            templateUrl: 'section/breakfast/breakfast.html',
            controller: 'breakfastCtrl'
        })
        .when('/testDirective', {
            templateUrl: 'section/test/testDirective.html',
            controller: 'testDirectiveCtrl'
        })
        .when('/testDD', {
                    templateUrl: 'section/test/testDragAndDrop.html',
                    controller: 'dragAndDropCtrl'
                })
        .otherwise({
            redirectTo: '/planning'
        });
    }
]);



