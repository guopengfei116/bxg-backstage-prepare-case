angular.module('component')
  .component('nglTcAdd', {
    templateUrl: '/src/component/teacher/add/add.html',
    controller: 'nglTcAddCtrl'
  })
  .controller('nglTcAddCtrl', [
    function() {
      console.log('添加讲师');
    }
  ]);