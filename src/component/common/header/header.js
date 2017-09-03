angular.module('component')
  .component('nglHeader', {
    templateUrl: '/src/component/common/header/header.html',
    controller: 'nglHeaderCtrl'
  })
  .controller('nglHeaderCtrl', [
    function() {
      console.log('头部');
    }
  ]);