require('../common/loading.js');
require('../common/header.js');
require('../common/aside.js');

/**
 * 表单提交：
 * 1、使用插件ajaxForm方法监听表单submit事件并自动转ajax提交
 * 2、提交成功后重新获取表单通过插件resetForm方法重置表单中的值
 * */
$('#teacher-add-form').ajaxForm(function(data) {
  if(data.code == 200) {
    alert('添加成功');
    $('#teacher-add-form').resetForm();
  }
});