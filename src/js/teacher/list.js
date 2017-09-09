require('../common/loading.js');
require('../common/header.js');
require('../common/aside.js');

/**
 * 渲染讲师列表：
 * 1、请求接口获取数据
 * 2、通过模版引擎获取数据渲染后的模版，然后插入到页面指定位置
 * */
$.get('/v6/teacher', function(data) {
  if(data.code === 200) {
    $('#teacher-list-table').append(template('teacher-list-tpl', data.result));
  }
});

/**
 * 查看讲师信息：
 * 1、因为查看按钮是随着讲师列表动态生成的，所以要委托的方式监听按钮click事件
 * 2、然后调接口获取讲师信息，tc_id字段取自从父元素的data-id自定义属性
 * 3、获取模版引擎数据渲染后的html，插入到页面指定位置
 * */
$(document).on('click', '.teacher-view', function() {
  var data = {
    tc_id: $(this).parent().attr('data-id')
  };

  $.get('/v6/teacher/view', data, function(data) {
    if(data.code == 200) {
      $('#teacherModal').html(template('teacher-info-tpl', data.result));
    }
  });
});

/**
 * 修改讲师状态：
 * 1、因为修改按钮是随着讲师列表动态生成的，所以要委托的方式监听按钮click事件
 * 2、然后调接口修改讲师状态，tc_id与tc_status字段取自父元素的data-id与data-status自定义属性
 * 3、状态修改成功后需要更新父元素身上的data-status属性为新的状态，并更新修改按钮的描述文字
 * */
$(document).on('click', '.teacher-status', function() {
  var $this = $(this);
  var data = {
    tc_id: $this.parent().attr('data-id'),
    tc_status: $this.parent().attr('data-status')
  };

  $.post('/v6/teacher/handle', data, function(data) {
    if(data.code == 200) {
      $this.parent().attr('data-status', data.result.tc_status); // 后端会返回新的状态值
      $this.html(data.result.tc_status == 0? '开启': '注销'); // tc_status: 0注销, 1开启，显示的时候需要取反
    }
  });
});