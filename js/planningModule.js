
/**
******************************************************************************************************************************************************************************************************
******************************************************************
 Contrôleur de la page de  ************ PLANNING *****************
******************************************************************
******************************************************************
 */
 
 //var planningControllers = angular.module('planningControllers', ['ui.bootstrap']);
 var planningControllers = angular.module('planningControllers', []);
 planningControllers.controller('planningCtrl', ['$scope','$routeParams', '$http', "$rootScope",
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






planningControllers.directive("drag", ["$rootScope", function($rootScope) {
  
  function dragStart(evt, element, dragStyle) {
    element.addClass(dragStyle);
    evt.dataTransfer.setData("id", evt.target.id);
    evt.dataTransfer.effectAllowed = 'move';
  };
  function dragEnd(evt, element, dragStyle) {
    element.removeClass(dragStyle);
  };
  
  return {
    restrict: 'A',
    link: function(scope, element, attrs)  {
      attrs.$set('draggable', 'true');
      scope.dragData = scope[attrs["drag"]];
      scope.dragStyle = attrs["dragstyle"];
      element.bind('dragstart', function(evt) {
       	$rootScope.draggedElement = scope.dragData;
        dragStart(evt, element, scope.dragStyle);
      });
      element.bind('dragend', function(evt) {
        dragEnd(evt, element, scope.dragStyle);
      });
    }
  }
}]);

planningControllers.directive("drop", ['$rootScope', function($rootScope) {
  
  function dragEnter(evt, element, dropStyle) {
    evt.preventDefault();
    element.addClass(dropStyle);
  };
  function dragLeave(evt, element, dropStyle) {
    element.removeClass(dropStyle);
  };
  function dragOver(evt) {
    evt.preventDefault();
  };
  function drop(evt, element, dropStyle) {
    evt.preventDefault();
    element.removeClass(dropStyle);
  };
  
  return {
    restrict: 'A',
    link: function(scope, element, attrs)  {
      scope.dropData = scope[attrs["drop"]];
      scope.dropStyle = attrs["dropstyle"];
      element.bind('dragenter', function(evt) {
        dragEnter(evt, element, scope.dropStyle);
      });
      element.bind('dragleave', function(evt) {
        dragLeave(evt, element, scope.dropStyle);
      });
      element.bind('dragover', dragOver);
      element.bind('drop', function(evt) {
        drop(evt, element, scope.dropStyle);
        $rootScope.$broadcast('dropEvent', $rootScope.draggedElement, scope.dropData);
      });
    }
  }
}]);


      

	  
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