angular.module('component')
  .component('nglAside', {
    templateUrl: '/src/component/common/aside/aside.html',
    controller: 'nglAsideCtrl'
  })
  .controller('nglAsideCtrl', [
    function() {
      console.log('左侧边栏');
    }
  ]);