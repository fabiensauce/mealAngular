

/**
******************************************************************************************************************************************************************************************************
******************************************************************
 Contrôleur de la  ************ NAV ******************************
******************************************************************
******************************************************************
 */
 

var testDirectiveControllers = angular.module('testDirectiveControllers', []);
testDirectiveControllers.controller('testDirectiveCtrl', ['$scope', '$location',
    function($scope,$location){
        $scope.msg = "BINEVUNE DS TEST DIRECTIVE";
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


testDirectiveControllers.directive("myTarget", function(){
	return{
        restrict: 'EA',
        transclude: true,
        template: "<div ng-repeat='expander in expanders' > bjr ex :  </div> <div ng-transclude></div>",
		controller: function(){
            var expanders = [];
            this.addExpander = function(expander){
				alert("BOOM gelement given to myTargetController ;)");
                expanders.push(expander);
            };
        }
	}
	
	
})


testDirectiveControllers.directive("appear1", ["$rootScope", function($rootScope) {
	return {
		restrict: 'E',
        require: '^?myTarget',
		template: '<button ng-click="addExpander()"> ICI le div appear1 </button>',
		link: function(scope, element, attrs, myTargetController){
			element.css({
				border:'3px solid brown'
			});
			element.on('mouseover', function(event) {
				element.css({
					border:'3px solid yellow'
				});
			})
			element.on('mouseout', function(event) {
				element.css({
					border:'3px solid blue'
				});
			});
			scope.addExpander = function addExpander(){
				
				myTargetController.addExpander(element);
				
			}
			
		}
		
	};
	
}]);








