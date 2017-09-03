angular.module('component')
  .component('nglAside', {
    templateUrl: '/src/component/common/aside/aside.html',
    controller: 'nglAsideCtrl'
  })
  .controller('nglAsideCtrl', [
    '$scope',
    '$location',
    'SRC',
    'storage',
    function($scope, $location, SRC, storage) {
      console.log('左侧导航');

      // 用户信息展示
      $scope.userInfo = storage.get('userInfo') || { tc_avatar: SRC.avatar };

      // path用来定位焦点
      $scope.path = $location.$$path;

      // 用来控制子节点显示隐藏的状态映射表，
      // 默认状态根据path的第一层进行初始化
      // 并提供方法修改状态
      var rootPath = $scope.path.split('/')[1];
      $scope.navState = {
        teacher: rootPath == 'teacher',
        category: rootPath == 'category',
        course: rootPath == 'course',
      };
      $scope.changeNavState = function(name) {
        $scope.navState[name] = !$scope.navState[name];
      };

    }
  ]);