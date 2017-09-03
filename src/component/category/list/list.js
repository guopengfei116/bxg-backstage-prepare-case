angular.module('component')
  .component('nglCgList', {
    templateUrl: '/src/component/category/list/list.html',
    controller: 'nglCgListCtrl'
  })
  .controller('nglCgListCtrl', [
    function() {
      console.log('学科列表');
    }
  ]);