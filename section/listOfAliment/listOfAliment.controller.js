
/**
******************************************************************************************************************************************************************************************************
******************************************************************
 Contrôleur de la page de  ************ LIST OF ALIMENT **********
******************************************************************
******************************************************************
 */
 var listOfAlimentModule = angular.module('listOfAlimentModule', []);
listOfAlimentModule.controller('listOfAlimentCtrl', ['$scope','$routeParams',
    function($scope, $routeParams){
        $scope.message = "BIENVENUE ds les listOfAliment !!! =)";
		
    }
]);