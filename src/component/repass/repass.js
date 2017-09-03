angular.module('component')
  .component('nglRepass', {
    templateUrl: '/src/component/repass/repass.html',
    controller: 'nglRepassCtrl'
  })
  .controller('nglRepassCtrl', [
    '$rootScope', 
    '$scope', 
    'http',
    function($rootScope, $scope, http) {
      console.log('修改密码');

      // 表单数据初始化
      $scope.user = {
        tc_pass: '',
        tc_new_pass: '',
        tc_new_pass_repeat: ''
      };

      // 修改密码
      $scope.repass = function() {

        // 校验两次新密码是否一致，
        if($scope.user.tc_new_pass !== $scope.user.tc_new_pass_repeat) {
          alert('两次确认密码不一致!');
          return;
        }

        // api请求，成功后触发logout事件
        http.api('repass', $scope.user, function() {
          $rootScope.$broadcast('logout');
        });

      };
    }
  ]);