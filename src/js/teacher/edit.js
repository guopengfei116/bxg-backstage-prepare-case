require('../common/loading.js');
require('../common/header.js');
require('../common/aside.js');
var util = require('../common/util.js');

/**
 * 数据回显：
 * 1、获取location.search中tc_id的值
 * 2、调用接口获取讲师数据
 * 3、获取模版引擎数据渲染后的模版，插入指定元素
 * */
var data = {
  tc_id: util.parseSearch('tc_id')
};

$.get('/v6/teacher/edit', data, function(data) {
  $('.teacher-edit').html(template('teacher-edit-tpl', data.result));
});

/**
 * 表单提交：
 * 1、因为数据要回写，造成表单是动态生成的，所以要委托的方式监听表单submit事件
 * 2、使用插件ajaxForm方法监听表单submit事件并自动转ajax提交
 * */
$('#teacher-edit-form').ajaxForm({
  delegation: true,
  success: function(data) {
    if(data.code == 200) {
      alert('修改成功');
    }
  }
});