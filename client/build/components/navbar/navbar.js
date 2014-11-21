angular.module('./components/navbar/navbar.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('./components/navbar/navbar.html',
    '<div class="test">testing</div>');
}]);
