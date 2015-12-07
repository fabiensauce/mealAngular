
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
