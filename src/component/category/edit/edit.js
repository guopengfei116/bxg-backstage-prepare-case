angular.module('component')
  .component('nglCgEdit', {
    templateUrl: '/src/component/category/edit/edit.html',
    controller: 'nglCgEditCtrl'
  })
  .controller('nglCgEditCtrl', [
    function() {
      console.log('编辑学科');
    }
  ]);