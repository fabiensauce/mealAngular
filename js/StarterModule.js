
/**
******************************************************************
******************************************************************
 Contrôleur de la page de  ************ STARTER *******************
******************************************************************
******************************************************************
 */
 
 var starterControllers = angular.module('starterControllers', []);
starterControllers.controller('starterCtrl', ['$scope','$routeParams',
    function($scope, $routeParams){
        $scope.message = "BIENVENUE ds les starter e tpas course !!! =)";
		
    }
]);
