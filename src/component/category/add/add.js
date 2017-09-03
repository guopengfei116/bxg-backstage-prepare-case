angular.module('component')
  .component('nglCgAdd', {
    templateUrl: '/src/component/category/add/add.html',
    controller: 'nglCgAddCtrl'
  })
  .controller('nglCgAddCtrl', [
    function() {
      console.log('添加学科');
    }
  ]);