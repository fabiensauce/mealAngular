
/**************************************************************************************************************************************************************
******************************************************************
******************************************************************
 Contrôleur de la page de  ************ DESSERT ******************
******************************************************************
******************************************************************
 */

 var dessertControllers = angular.module('dessertControllers', []);
dessertControllers.controller('dessertCtrl', ['$scope','$routeParams','$http',
    function($scope, $routeParams, $http){
        $scope.message = "BIENVENUE ds les DESSERT !!! =)";
		$http.get('web/json/desserts.json').success(function(data) {
		   $scope.desserts = data;
		});
		$scope.ingredient = "ahah";
		$scope.preparation ="oups";
		$scope.submitCreationRecipe = function() {
			
			alert("new test JSON updated ! ");
			var data = $.param({
            json: JSON.stringify({
                name: $scope.ingredient
				})
			});
			var futureSent = $http.post("web/json/desserts2.json", data);
			$scope.preparation = data;
			futureSent.success(function(data, status) {
				alert("shit...1");
			});
			futureSent.error(function(data, status) {
				alert("shit...");
				throw new Error('Something went wrong...');
			});
		};
		
		//$scope.msg = 'Data sent: '+ JSON.stringify($scope.languages);
    }
]);


/** ci dessous permet d'effectuer une action (ici fixer la nav) après une certaine distance de scroll **/
/** identique dans STARTER COURSE & DESSERT .... **/
dessertControllers.directive("scroll", function ($window) {
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
