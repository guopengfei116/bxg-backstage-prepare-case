angular.module('component')
  .directive('nglCsList', [
    function() {
      return {
        scope: {},
        restrict: 'E',
        templateUrl: '/src/component/course/list/list.html',
        controller: 'nglCsEditList'
      };
    }
  ])
  .controller('nglCsEditList', [
    function() {
      console.log('课程列表');
    }
  ]);