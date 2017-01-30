(function () {
angular.module('Platzi', []).controller('BaseCtrl',['$scope', function($scope) {

  io.socket.get('/emoji', function (data) {
    $scope.emojis = data;
    $scope.$apply();
  });

  io.socket.on('emoji', function (event) {
    switch (event.verb) {
      case 'created':
        $scope.emojis.push(event.data);
        $scope.$apply();
        break;
    }
  });

}]);
}());


  /*$scope.emojis = [{
    id:1,
    text: ':)'
  },
    {
      id:2,
      text: ';)'
    },
    {
      id:3,
      text: ':('
    }];*/
