
/**
******************************************************************************************************************************************************************************************************
******************************************************************
 Contrôleur de la page de  ************ BREAKFAST ****************
******************************************************************
******************************************************************
 */
 /*
 var breakfastControllers = angular.module('breakfastControllers', []);
breakfastControllers.controller('breakfastCtrl', ['$scope','$routeParams',
    function($scope, $routeParams){
        $scope.message = "BIENVENUE ds les breakfast !!! woot woot =)";
		
    }
]);

IMPORTANT pour href ? :
app.controller('TestCtrl', function($scope, $location, $anchorScroll) {
   $scope.scrollTo = function(id) {
      $location.hash(id);
      $anchorScroll();
   }
});

<a ng-click="scrollTo('foo')">Foo</a>

<div id="foo">Here you are</div>




*/

angular.module('breakfastControllers', []).controller('breakfastCtrl', ['$scope', '$http',
	function ($scope, $http) {
		
		$scope.naav = "xxxxx";
		$scope.myNavs = [ "hi", "bjr", "gotekctak"];
		
		
		$http.get('web/json/courses.json').success(function(data) {
		   $scope.coursesLocals = angular.fromJson(data);
		});
		/*
		$scope.coursesLocals =[{"name":"burger",
"title":"Burgers Maison", 
"nbPers":"5",
	"ingredients": [ {"quantity":"10", "unit":"", "name":"pains burgers"},
					{"quantity":"5", "unit":"", "name":"tomtaes"}, 
					{"quantity":"100", "unit":"g", "name":"fromage rapé"},
					{"quantity":"10", "unit":"", "name":"steaks hachés"},
					{"quantity":"1", "unit":"", "name":"sauce burger"},
					{"quantity":"1", "unit":"", "name":"salade"}],
	"preparation":"Faire cuire les steaks hachés sans matière grasse dans une poele avec un couvercle. \nPendant ce temps, coupez les tomates en tranches fines et lavez la salade si besoin.Lorsque les steaks sont prêts, préparez les burgers:Déposez les tranches de pains burgers dans une assiète. Mettre du fromage sur les deux côtés du pain. Les faire chauffer au micro onde 30 secondes. Recouvrez les de sauce burger. Mettez le steak, 3 tranches de tomates et une feuille de salade."
},
{"name":"lasagne",
"title":"Lasagnes", 
"nbPers":"3",
	"ingredients": [ {"quantity":"200", "unit":"g", "name":"sauce tomtaes"}, 
					{"quantity":"100", "unit":"g", "name":"fromage rapé"},
					{"quantity":"500", "unit":"g", "name":"steaks hachés"},
					{"quantity":"100", "unit":"g", "name":"pates lasagne"},
					{"quantity":"1", "unit":"pot", "name":"creme fraiche"}],
	"preparation":"Faire cuire les steak hache. en parallele creme fraiche Placer dans un plat à four les steak puis creme puis couche de lasagne (pates) puis encoure 3 fois mettez au four 25min "
},
{"name":"escalopeViennoise",
"title":"Escalopes Viennoises", 
"nbPers":"2",
	"ingredients": [ {"quantity":"300", "unit":"g", "name":"escalope dinde"}, 
					{"quantity":"100", "unit":"g", "name":"chapelure"},
					{"quantity":"4", "unit":"g", "name":"oeufs"},
					{"quantity":"200", "unit":"g", "name":"farine"},
					{"quantity":"", "unit":"", "name":"epices"}],
	"preparation":" Preparez 3 plats, un mettez de la farine, l'autre des oeufs mélangez comme pour faire une omelette et assaisonées d'épices, le troisième avec de la chapelure. Trempez les escalade dans la farine puis oeufs puis chapelure et mettez à la poelle avec beaucoup de matière grasse  :p "
}
];
		*/
		
   $scope.message = "BIENVENUE ds les breakfast !!! woot woot 2 =)";
  $scope.today = function() {
    $scope.dt = new Date();
  };
  $scope.today();

  $scope.clear = function () {
    $scope.dt = null;
  };

  // Disable weekend selection
  $scope.disabled = function(date, mode) {
    return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
  };

  $scope.toggleMin = function() {
    $scope.minDate = $scope.minDate ? null : new Date();
  };
  $scope.toggleMin();
  $scope.maxDate = new Date(2020, 5, 22);

  $scope.open = function($event) {
    $scope.status.opened = true;
  };

  $scope.setDate = function(year, month, day) {
    $scope.dt = new Date(year, month, day);
  };

  $scope.dateOptions = {
    formatYear: 'yy',
    startingDay: 1
  };

  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[0];

  $scope.status = {
    opened: false
  };

  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  var afterTomorrow = new Date();
  afterTomorrow.setDate(tomorrow.getDate() + 2);
  $scope.events =
    [
      {
        date: tomorrow,
        status: 'full'
      },
      {
        date: afterTomorrow,
        status: 'partially'
      }
    ];

  $scope.getDayClass = function(date, mode) {
    if (mode === 'day') {
      var dayToCheck = new Date(date).setHours(0,0,0,0);

      for (var i=0;i<$scope.events.length;i++){
        var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

        if (dayToCheck === currentDay) {
          return $scope.events[i].status;
        }
      }
    }

    return '';
  };
}]);

