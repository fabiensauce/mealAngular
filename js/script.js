// js/script.js
'use strict';


/**
 * Déclaration de l'application appMeal
 */
var appMeal = angular.module('appMeal', [
    // Dépendances du "module"
    'ngRoute',
    'appMealControllers',
	'navControllers77'
]);




/**
 * Configuration du module principal : appMeal
 */
appMeal.config(['$routeProvider',
    function($routeProvider) { 
        
        // Système de routage
        $routeProvider
        .when('/home', {
            templateUrl: 'partials/home.html',
            controller: 'homeCtrl'
			//,activetab: 'home'
        })
        .when('/contact/:msg?', {
            templateUrl: 'partials/contact.html',
            controller: 'contactCtrl'
        })
        .when('/planning', {
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
            redirectTo: '/home'
        });
    }
]);

		
var navControllers77 = angular.module('navControllers77', []);
navControllers77.controller('navCtrl', ['$scope', '$location',
    function($scope,$location){
        $scope.firstName = "John";
        $scope.lastName = "Doe";
		$scope.testAlert = function(txt){
			alert(txt);
		}
		$scope.myVar = "my-init";
		$scope.isActive = function (viewLocation) { 
			//return viewLocation === $location.path();
			return $location.path().indexOf(viewLocation) == 0; //catch pages with parameters as well compare to the upper line
		};
    }
]);
/**
******************************************************************************************************************************************************************************************************
*********
*/

/**
 * Définition des contrôleurs
 */
var appMealControllers = angular.module('appMealControllers', []);

// Contrôleur de la page d'accueil
appMealControllers.controller('homeCtrl', ['$scope', '$route',
    function($scope){
        $scope.messageALL = "Bienvenue sur la page d'accueil ahah";
    },
	/*function homeCtrl($scope, $route) {
		$scope.$route = $route;
	}*/
]);

// Contrôleur de la page de contact
appMealControllers.controller('contactCtrl', ['$scope','$routeParams',
    function($scope, $routeParams){
        $scope.message = "Laissez-nous un message sur la page de contact !";
        // Si aucun paramètre n'est passé, on met notre phrase initiale
        $scope.msg = $routeParams.msg || "Bonne chance pour cette nouvelle appli hihi !";
		
    }
]);

/**
******************************************************************************************************************************************************************************************************
******************************************************************
 Contrôleur de la page de  ************ PLANNING *****************
******************************************************************
******************************************************************
 */
 appMealControllers.controller('planningCtrl', ['$scope','$routeParams',
    function($scope, $routeParams){
        $scope.message = "1223 BIENVENUE ds les planning !!! PPPPTITINTITNNITN DADEL =)";
		
    }
]);



/**
******************************************************************************************************************************************************************************************************
******************************************************************
 Contrôleur de la page de  ************ LIST OF ALIMENT **********
******************************************************************
******************************************************************
 */
appMealControllers.controller('listOfAlimentCtrl', ['$scope','$routeParams',
    function($scope, $routeParams){
        $scope.message = "BIENVENUE ds les listOfAliment !!! =)";
		
    }
]);


/**
******************************************************************************************************************************************************************************************************
******************************************************************
 Contrôleur de la page de  ************/ /* STARTER */ /**********
******************************************************************
******************************************************************
 */
appMealControllers.controller('starterCtrl', ['$scope','$routeParams',
    function($scope, $routeParams){
        $scope.message = "BIENVENUE ds les starter !!! =)";
		
    }
]);
/** ci dessous permet d'effectuer une action (ici fixer la nav) après une certaine distance de scroll **/
appMealControllers.directive("scroll", function ($window) {
    return function($scope, element, attrs) {
        angular.element($window).bind("scroll", function() {
             if (this.pageYOffset >= 430) {
                 $scope.boolNavFixed = true;
             } else {
                 $scope.boolNavFixed = false;
             }
            $scope.$apply();
        });
    };
});


/**
******************************************************************
******************************************************************
 Contrôleur de la page de  ************ COURSE *******************
******************************************************************
******************************************************************
 */
appMealControllers.controller('courseCtrl', ['$scope','$routeParams',
    function($scope, $routeParams){
        $scope.message = "BIENVENUE ds les course !!! =)";
		
    }
]);


/**
******************************************************************
******************************************************************
 Contrôleur de la page de  ************ DESSERT ******************
******************************************************************
******************************************************************
 */
appMealControllers.controller('dessertCtrl', ['$scope','$routeParams',
    function($scope, $routeParams){
        $scope.message = "BIENVENUE ds les dessert !!! =) wahou";
		
    }
]);



/**
******************************************************************************************************************************************************************************************************
******************************************************************
 Contrôleur de la page de  ************ BREAKFAST ****************
******************************************************************
******************************************************************
 */
appMealControllers.controller('breakfastCtrl', ['$scope','$routeParams',
    function($scope, $routeParams){
        $scope.message = "BIENVENUE ds les breakfast !!! =)";
		
    }
]);