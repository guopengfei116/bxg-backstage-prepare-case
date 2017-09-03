angular.module('component')
  .directive('nglCsEdit3', [
    function() {
      return {
        scope: {},
        restrict: 'E',
        templateUrl: '/src/component/course/edit3/edit3.html',
        controller: 'nglCsEdit3Ctrl'
      };
    }
  ])
  .controller('nglCsEdit3Ctrl', [
    function() {
      console.log('课程编辑2');
    }
  ]);