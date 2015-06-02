app.controller('HomeCtrl', function($rootScope, $location)
{
   $rootScope.activetab = $location.path();
});
 
app.controller('GradeCtrl', function($rootScope, $location)
{
   $rootScope.activetab = $location.path();
});
 
app.controller('TabelaCtrl', function($rootScope, $location)
{
   $rootScope.activetab = $location.path();
});

app.controller('MatrizCtrl', function($scope) {

$scope.matriz =[];
$scope.linha;
$scope.coluna;

$scope.getNumber = function(num) {
       return new Array (Number(num));   
   }
});

$(World).keydown(function($scope){//codigo da Tabela
if ($scope.linha.keyCode == 37) { 
alert( "left pressed " );
return false;
}
if ($scope.keyCode == 38) { 
alert( "up pressed " );
return false;
}
if ($scope.keyCode == 39) { 
alert( "right pressed " );
return false;
}
if ($scope.keyCode == 40) { 
alert( "down pressed " );
return false;
}
});

app.controller('NavigableTableCtrl', ['$scope', function($scope){
		var items = []
		for (var i = 0; i<4; i++){
			items.push({})
		}
		$scope.items = items
		$scope.show = function(index){
			return !$scope.hideSome || index %2 ===0
		}
		
		$scope.modes = [{name: 'Excel', show:false, value: 'excel'},{name: 'Standard', show:true, value: ''}]
		$scope.toggleMode = function(){
			for (var i=0; i< $scope.modes.length; i++){
				$scope.modes[i].show = !$scope.modes[i].show
			}
		}
		
		$scope.modeName = function(shown){
			for (var i=0; i< $scope.modes.length; i++){
				if ($scope.modes[i].show === shown){
					return $scope.modes[i].name
				}
			}
		}
		
}]);
