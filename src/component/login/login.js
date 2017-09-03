angular.module('component')
  .component('nglLogin', {
    templateUrl: '/src/component/login/login.html',
    controller: 'nglLoginCtrl'
  })
  .controller('nglLoginCtrl', [
    '$scope',
    '$location',
    'SRC',
    'http',
    'storage',
    function($scope, $location, SRC, http, storage) {
      console.log('登陆页');

      // 登陆功能
      $scope.user = {
        tc_name: '',
        tc_pass: ''
      };
      $scope.login = function() {
        http.api('login', $scope.user, function(data) {
          storage.set('userInfo', data);
          $location.path('/');
        });
      };

      // 历史登陆用户的头像回显，没有则显示默认头像
      $scope.userInfo = storage.get('userInfo') || { tc_avatar: SRC.avatar };
    }
  ]);