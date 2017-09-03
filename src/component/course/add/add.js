angular.module('component')
  .directive('nglCsAdd', [
    function() {
      return {
        scope: {},
        restrict: 'E',
        templateUrl: '/src/component/course/add/add.html',
        controller: 'nglCsAddCtrl'
      };
    }
  ])
  .controller('nglCsAddCtrl', [
    function() {
      console.log('课程添加');
    }
  ]);