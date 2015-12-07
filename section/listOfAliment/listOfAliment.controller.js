
/**
******************************************************************************************************************************************************************************************************
******************************************************************
 Contrôleur de la page de  ************ LIST OF ALIMENT **********
******************************************************************
******************************************************************
 */
 
 var listOfAlimentControllers = angular.module('listOfAlimentControllers', []);
listOfAlimentControllers.controller('listOfAlimentCtrl', ['$scope','$routeParams',
    function($scope, $routeParams){
        $scope.message = "BIENVENUE ds les listOfAliment !!! =)";
		
    }
]);