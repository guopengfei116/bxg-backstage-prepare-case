// 讲师列表功能：1、列表渲染 2、搜索 3、修改讲师注销启用状态 4、查看讲师
angular.module('component')
  .component('nglTcList', {
    templateUrl: '/src/component/teacher/list/list.html',
    controller: 'nglTcListCtrl'
  })
  .controller('nglTcListCtrl', [
    '$scope',
    'http',
    function($scope, http) {
      console.log('讲师列表');
      
      // 1、数据初始化
      $scope.list = []; // 讲师列表
      $scope.teacher = {}; // 讲师查看
      $scope.searchKey = ''; // 搜索关键字

      // 2、列表渲染，页面一进来就请求接口
      http.api('teacherList', function(result) {
        $scope.list = result;
      });

      // 3、讲师注销启用状态修改，从模版中传入要修改的讲师对象
      $scope.changeStatus = function(teacher) {

        // 发送请求，成功后，修改讲师对象的tc_status状态
        var data = { tc_id:teacher.tc_id, tc_status: teacher.tc_status };
        http.api('teacherHandle', data, function(result) {
          teacher.tc_status = result.tc_status;
        });

      };

      // 4、讲师查看
      $scope.teacherView = function(id) {
        http.api('teacherView', { tc_id: id }, function(result) {
          $scope.teacher = result;
        });
      };
    }
  ]);