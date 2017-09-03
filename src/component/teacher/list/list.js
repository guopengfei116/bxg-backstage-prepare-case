angular.module('component')
  .component('nglTcList', {
    templateUrl: '/src/component/teacher/list/list.html',
    controller: 'nglTcListCtrl'
  })
  .controller('nglTcListCtrl', [
    function() {
      console.log('讲师列表');
    }
  ]);