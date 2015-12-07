

/**
******************************************************************************************************************************************************************************************************
******************************************************************
 Contrôleur de la page de  ************/ /* COURSE */ /**********
******************************************************************
******************************************************************
 */
 
 
 var courseControllers = angular.module('courseControllers', []);
courseControllers.controller('courseCtrl', ['$scope','$routeParams','$http',
    function($scope, $routeParams, $http){
        $scope.message = "BIENVENUE ds les COURSE !!! =)";
		$http.get('web/json/courses.json').success(function(data) {
		   $scope.courses = angular.fromJson(data);
		});
		/*$http.post('path/to/server/file/to/save/json', $scope.languages).then(function(data) {
		  $scope.msg = 'Data saved';
		});*/
		//$scope.msg = 'Data sent: '+ JSON.stringify($scope.languages);
    }
]);


/** ci dessous permet d'effectuer une action (ici fixer la nav) après une certaine distance de scroll **/
/** identique dans STARTER COURSE & DESSERT .... **/
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