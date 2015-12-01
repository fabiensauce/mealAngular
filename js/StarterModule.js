
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
starterControllers.controller('starterCtrl', ['$scope','$routeParams', '$http',
    function($scope, $routeParams, $http){
		$http.get('web/json/starters.json').success(function(data) {
		   $scope.starters = data;
		});
		/*$http.post('path/to/server/file/to/save/json', $scope.languages).then(function(data) {
		  $scope.msg = 'Data saved';
		});*/
		//$scope.msg = 'Data sent: '+ JSON.stringify($scope.languages);
    }
]);
/** ci dessous permet d'effectuer une action (ici fixer la nav) après une certaine distance de scroll **/
/** identique dans STARTER COURSE & DESSERT .... **/
starterControllers.directive("scroll", function ($window) {
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
