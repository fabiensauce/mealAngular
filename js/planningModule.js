
/**
******************************************************************************************************************************************************************************************************
******************************************************************
 Contrôleur de la page de  ************ PLANNING *****************
******************************************************************
******************************************************************
 */
 
 //var planningControllers = angular.module('planningControllers', ['ui.bootstrap']);
 var planningControllers = angular.module('planningControllers', []);
 planningControllers.controller('planningCtrl', ['$scope','$routeParams', '$http',
    function($scope, $routeParams, $http){
        $scope.message = "BIENVENUE ds les planning !!";
		$scope.msg =  $routeParams.msg || "ecrire là haut ds l'url apres le slash";
		$http.get('web/json/langues.json').success(function(data) {
		   $scope.languages = data;
		});
		/*$http.post('path/to/server/file/to/save/json', $scope.languages).then(function(data) {
		  $scope.msg = 'Data saved';
		});*/
		//$scope.msg = 'Data sent: '+ JSON.stringify($scope.languages);
    }
]);

/*
 var planningControllers =  angular.module('planningControllers',['ngMaterial', 'ngMessages']);
	planningControllers.controller('planningCtrl', ['$scope',
	function($scope) {
		
        $scope.message = "CA C NEEW fuckiiin A !! on sait que c amarche ... ";
  $scope.myDate = new Date();
  $scope.minDate = new Date(
      $scope.myDate.getFullYear(),
      $scope.myDate.getMonth() - 2,
      $scope.myDate.getDate());
  $scope.maxDate = new Date(
      $scope.myDate.getFullYear(),
      $scope.myDate.getMonth() + 2,
      $scope.myDate.getDate());
  $scope.onlyWeekendsPredicate = function(date) {
    var day = date.getDay();
    return day === 0 || day === 6;
  }
}]);
*/
/*
function functionDatepicker(){
	jQuery('.datepick').datepicker({
dateFormat: 'dd/mm/yy'});
}
*/