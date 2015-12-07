

/** ci dessous permet d'effectuer une action (ici fixer la nav) après une certaine distance de scroll **/
/** identique dans STARTER COURSE & DESSERT .... **/
 var courseModule = angular.module('courseModule', []);
courseModule.directive("scroll", function ($window) {
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