angular.module('component')
  .component('nglLogin', {
    templateUrl: '/src/component/login/login.html',
    controller: 'nglLoginCtrl'
  })
  .controller('nglLoginCtrl', [
    function() {
      console.log('登陆');
    }
  ]);