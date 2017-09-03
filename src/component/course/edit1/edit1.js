angular.module('component')
  .directive('nglCsEdit1', [
    function() {
      return {
        scope: {},
        restrict: 'E',
        templateUrl: '/src/component/course/edit1/edit1.html',
        controller: 'nglCsEdit1Ctrl'
      };
    }
  ])
  .controller('nglCsEdit1Ctrl', [
    function() {
      console.log('课程编辑1');
    }
  ]);