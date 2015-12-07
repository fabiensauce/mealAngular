
/**
******************************************************************************************************************************************************************************************************
******************************************************************
 Contrôleur de la page de  ************ PLANNING *****************
******************************************************************
******************************************************************
 */
 
 //var planningModule = angular.module('planningModule', ['ui.bootstrap']);
 var planningModule = angular.module('planningControllers', []);
 planningModule.controller('planningCtrl', ['$scope','$routeParams', '$http', "$rootScope",
    function($scope, $routeParams, $http, $rootScope){
        $scope.message = "BIENVENUE ds les planning !!";
		$scope.msg =  $routeParams.msg || "ecrire là haut ds l'url apres le slash";
		$http.get('web/json/langues.json').success(function(data) {
		   $scope.languages = data;
		});
		$scope.username = "bonhomme";
		$scope.usernameJPG = "bonhomme.jpg";
		/*$http.post('path/to/server/file/to/save/json', $scope.languages).then(function(data) {
		  $scope.msg = 'Data saved';
		});*/
		//$scope.msg = 'Data sent: '+ JSON.stringify($scope.languages);
		
		$scope.columns = [{title:"1"}, {title:"2"}, {title:"3"}, {title:"4"}];
    
		$rootScope.$on('dropEvent', function(evt, dragged, dropped) {
			var i, oldIndex1, oldIndex2;
			for(i=0; i<$scope.columns.length; i++) {
				var c = $scope.columns[i];
				if(dragged.title === c.title) {
					oldIndex1 = i;
				}
				if(dropped.title === c.title) {
					oldIndex2 = i;
				}
			}
			var temp = $scope.columns[oldIndex1];
			$scope.columns[oldIndex1] = $scope.columns[oldIndex2];
			$scope.columns[oldIndex2] = temp;
			$scope.$apply();
		});
    }
]);


      

	  
/*
 var planningModule =  angular.module('planningModule',['ngMaterial', 'ngMessages']);
	planningModule.controller('planningCtrl', ['$scope',
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