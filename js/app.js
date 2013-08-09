angular.module('App', ['firebase'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', { controller: 'MainCtrl', 
        templateUrl: 'app/templates/main.html'})
      ;
  });
angular.module('App')
  .controller('MainCtrl', function($scope, angularFire) {
    // init chat item
    $scope.chat = { nick: 'Anonymous'};
    // get chats
    var url = "https://nwchat.firebaseio.com/chats";
    $scope.chats = angularFire(url, $scope, 'chats', []);

    $scope.add = function(chat) {
      chat.timestamp = new Date();
      $scope.chats.push(chat);
      // only keep 100 items
      if ($scope.chats.length > 99) { $scope.chats.splice(0,1); }
      $scope.chat = { nick: chat.nick };
      angular.element('textarea').focus();

      var top = angular.element('li:last-child').offset().top - 100;
      angular.element('body,html').animate({ scrollTop: top }, 800);
    };

    $scope.$watch('chats', function() {
      var top = angular.element('li:last-child').offset().top - 100;
      angular.element('body,html').animate({ scrollTop: top }, 800);
    });
  });