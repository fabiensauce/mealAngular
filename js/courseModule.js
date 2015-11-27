

/**
******************************************************************************************************************************************************************************************************
******************************************************************
 Contrôleur de la page de  ************/ /* COURSE */ /**********
******************************************************************
******************************************************************
 */
 
 
 var courseControllers = angular.module('courseControllers', []);
courseControllers.controller('courseCtrl', ['$scope','$routeParams',
    function($scope, $routeParams){
        $scope.message = "BIENVENUE ds les COURSE !!! =)";
		
    }
]);
/** ci dessous permet d'effectuer une action (ici fixer la nav) après une certaine distance de scroll **/
courseControllers.directive("scroll", function ($window) {
    return function($scope, element, attrs) {
        angular.element($window).bind("scroll", function() {
             if (this.pageYOffset >= 250) {
                 $scope.boolNavFixed = true;
             } else {
                 $scope.boolNavFixed = false;
             }
            $scope.$apply();
        });
    };
});