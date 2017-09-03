angular.module('component')
  .directive('nglCsEdit2', [
    function() {
      return {
        scope: {},
        restrict: 'E',
        templateUrl: '/src/component/course/edit2/edit2.html',
        controller: 'nglCsEdit2Ctrl'
      };
    }
  ])
  .controller('nglCsEdit2Ctrl', [
    function() {
      console.log('课程编辑2');
    }
  ]);