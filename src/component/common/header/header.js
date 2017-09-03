angular.module('component')
  .component('nglHeader', {
    templateUrl: '/src/component/common/header/header.html',
    controller: 'nglHeaderCtrl'
  })
  .controller('nglHeaderCtrl', [
    '$scope',
    '$location',
    'http',
    function($scope, $location, http) {
      console.log('公共头部');

      // 登出功能
      $scope.logout = function() {
        http.api('logout', function() {
          $location.path('/login');
        });
      };

      // 监听外界传递过来的logout事件，退出登陆
      $scope.$on('logout', function() {
        $scope.logout();
      });
    }
  ]);