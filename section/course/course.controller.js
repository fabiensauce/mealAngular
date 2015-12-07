

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

