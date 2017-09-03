angular.module('component')
  .component('nglIndex',{
    templateUrl: '/src/component/index/index.html',
    controller: 'nglIndexCtrl'
  })
  .controller('nglIndexCtrl', [
    function() {
      console.log('首页');
    }
  ]);