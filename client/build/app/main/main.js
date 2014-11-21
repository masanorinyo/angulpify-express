angular.module('./app/main/main.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/main/main.html',
    '<header>yay it\'s working!</header><main>Welecom to the <span>{{appname}}</span><span>test</span></main>');
}]);
