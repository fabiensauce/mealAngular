
/**
******************************************************************
******************************************************************
 Contrôleur de la page de  ************ STARTER *******************
******************************************************************
******************************************************************
 */
 var starterModule = angular.module('starterModule', []);
starterModule.controller('starterCtrl', ['$scope','$routeParams',
    function($scope, $routeParams){
        $scope.message = "BIENVENUE ds les starter e tpas course !!! =)";
		
    }
]);
starterModule.controller('starterCtrl', ['$scope','$routeParams', '$http',
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
