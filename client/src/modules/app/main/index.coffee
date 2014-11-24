module.exports = angular.module('angulpifyExpressApp.main',[])
  .config(($stateProvider) ->
    $stateProvider
    .state 'main',
      url: '/'
      templateUrl: 'modules/app/main/main.html'
      controller: 'mainCtrl'
  ).controller('mainCtrl', require('./mainController'))
