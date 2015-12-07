

/**
******************************************************************************************************************************************************************************************************
******************************************************************
 Contrôleur de la  ************ NAV ******************************
******************************************************************
******************************************************************
 */
 

var navModule = angular.module('navModule', []);
navModule.controller('navCtrl', ['$scope', '$location',
    function($scope,$location){
        $scope.firstName = "John";
        $scope.lastName = "Doe";
		$scope.testAlert = function(txt){
			alert(txt);
		}
		$scope.myVar = "my-init";
		$scope.isActive = function (viewLocation) { 
			//return viewLocation === $location.path();
			return $location.path().indexOf(viewLocation) == 0; //catch pages with parameters as well compare to the upper line
		};
    }
]);