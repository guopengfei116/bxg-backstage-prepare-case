angular.module('component')
  .component('nglRepass', {
    templateUrl: '/src/component/repass/repass.html',
    controller: 'nglRepassCtrl'
  })
  .controller('nglRepassCtrl', [
    function() {
      console.log('修改密码');
    }
  ]);