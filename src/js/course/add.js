require('../common/loading.js');
require('../common/header.js');
require('../common/aside.js');

/**
 * 表单提交：
 * 1、使用插件ajaxForm方法监听表单submit事件并自动转ajax提交
 * 2、成功后跳转到edit1页
 * */
$('#course-add-form').ajaxForm(function(data) {
  if(data.code == 200) {
    alert('添加成功');
    location.href = '/dist/html/course/edit1.html?cs_id=' + data.result.cs_id;
  }
});