
/**
******************************************************************
******************************************************************
 Contrôleur de la page de  ************ DESSERT ******************
******************************************************************
******************************************************************
 */
 
 var dessertControllers = angular.module('dessertControllers', []);
dessertControllers.controller('dessertCtrl', ['$scope','$routeParams',
    function($scope, $routeParams){
        $scope.message = "BIENVENUE ds les dessert !!! =) wahou";
		
    }
]);
