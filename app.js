var app = angular.module('app',['ngRoute']);
 
app.config(function($routeProvider, $locationProvider)
{
   // remove o # da url
   $locationProvider.html5Mode(true);
 
   $routeProvider
 
   // para a rota '/', carregaremos o template home.html e o controller 'HomeCtrl'
   .when('/', {
      templateUrl : 'app/views/home.html',
      controller     : 'HomeCtrl',
   })
 
   // para a rota '/grade', carregaremos o template grade.html e o controller 'GradeCtrl'
   .when('/grade', {
      templateUrl : 'app/views/grade.html',
      controller  : 'GradeCtrl',
   })
 
   // para a rota '/tabela', carregaremos o template tabela.html e o controller 'TabelaCtrl'
   .when('/tabela', {
      templateUrl : 'app/views/tabela.html',
      controller  : 'TabelaCtrl',
   })
   .when('/matriz', {
    templateUrl : 'app/views/matriz.html',
    controller  : 'MatrizCtrl',
 })
   // caso não seja nenhum desses, redirecione para a rota '/'
   .otherwise ({ redirectTo: '/' });
});