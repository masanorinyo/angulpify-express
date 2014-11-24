module.exports = angular.module('angulpifyExpressApp',[
  "ngResource"
  "ui.router"
  "ngAnimate"
  "btford.socket-io"
  "ui.router"
  "ngCookies"
  "ngTouch"
  "ngSanitize"
  "ngResource"
  require('../../../../.tmp/templates').name
  require('./main').name
]).config(($stateProvider, $urlRouterProvider)->
    $urlRouterProvider.otherwise('/')
)
