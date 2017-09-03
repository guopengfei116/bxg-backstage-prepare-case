angular.module('component')
  .component('nglProfile', {
    templateUrl: '/src/component/profile/profile.html',
    controller: 'nglProfileCtrl'
  })
  .controller('nglProfileCtrl', [
    function() {
      console.log('个人中心');
    }
  ]);