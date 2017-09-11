require('../common/loading.js');
require('../common/header.js');
require('../common/aside.js');

/**
 * 动态渲染从属分类select：
 * 1、请求接口获取顶级学科学科列表数据
 * 2、拿到数据渲染后的模版，插入到页面指定位置
 * */
$.get('/v6/category/top', function(data) {
  if(data.code == 200) {
    $('#category-select').html(template('category-select-tpl', data.result));
  }
});

/**
 * 表单提交：
 * 1、使用插件ajaxForm方法监听表单submit事件并自动转ajax提交
 * 2、成功后重置表单，因为回调中的this为xhr对象，所以不能使用this
 * */
$('#catetory-add-form').ajaxForm(function(data) {
  if(data.code == 200) {
    alert('添加成功');
    $('#catetory-add-form').resetForm();
  }
});
