// js/script.js
'use strict';


/**
 * D�claration de l'application mealApp
 */
var mealApp = angular.module('mealApp', [
    // D�pendances du "module"
    'ngRoute',
	'navModule',
	'planningModule',
	'listOfAlimentModule',
	'starterModule',
	'courseModule',
	'dessertModule',
	'breakfastModule',
	'testDirectiveModule',
	'dragAndDropModule'
	
]);




/**
 * Configuration du module principal : mealApp
 */
mealApp.config(['$routeProvider',
    function($routeProvider) { 
        
        // Syst�me de routage
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



