require('../common/loading.js');
require('../common/header.js');
require('../common/aside.js');
var util = require('../common/util.js');

/**
 * 数据回显：
 * 1、获取location.search中cg_id的值
 * 2、调用接口获取讲师数据
 * 3、获取模版引擎数据渲染后的模版，插入指定元素
 * */
var data = {
  cg_id: util.parseSearch('cg_id')
};

$.get('/v6/category/edit', data, function(data) {
  $('.category-edit').html(template('course-category-edit-tpl', data.result));
});

/**
 * 表单提交：
 * 1、因为表单是异步动态创建的，所以要开启ajaxForm的事件委托
 * 2、提交成功后给出用户提示
 * */
$('#course-category-edit-form').ajaxForm({
  delegation: true,
  success: function(data) {
    if(data.code == 200) {
      alert('修改成功');
    }
  }
});