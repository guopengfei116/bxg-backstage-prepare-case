angular.module('component')
  .component('nglTcEdit', {
    templateUrl: '/src/component/teacher/edit/edit.html',
    controller: 'nglTcEditCtrl'
  })
  .controller('nglTcEditCtrl', [
    function() {
      console.log('编辑讲师');
    }
  ]);