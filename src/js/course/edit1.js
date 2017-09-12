require('../common/loading.js');
require('../common/header.js');
require('../common/aside.js');
var util = require('../common/util.js');

/**
 * 功能点：
 * 1、数据回显
 * 2、表单提交
 * 3、学科分类二级联动
 * */
var cs_id = util.parseSearch('cs_id');

/**
 * 数据回显：
 * 1、获取location.search中cs_id的值
 * 2、调用接口获取数据
 * 3、获取模版引擎数据渲染后的模版，插入指定元素
 * */
$.get('/v6/course/basic', { cs_id: cs_id }, function(data) {
  if(data.code == 200) {
    data.result.editIndex = 1;
    $('.course-edit').append(template('course-edit1-tpl', data.result));
  }
});

/**
 * 表单提交：
 * 1、因为数据要回写，造成表单是动态生成的，所以要委托的方式监听表单submit事件
 * 2、修改成功后给出提示，跳转到edit2页，把cs_id传递过去
 * */
$('#course-edit1-form').ajaxForm({
  delegation: true,
  success: function(data) {
    if(data.code == 200) {
      alert('修改成功');
      location.href = '/dist/html/course/edit2.html?cs_id=' + cs_id;
    }
  }
});

/**
 * 学科分类二级联动：
 * 1、监听顶级学科下拉列表的change事件，因为列表是动态生成的，所以要使用委托
 * 2、事件发生时获取下拉列表的value，即用户所选的顶级学科cg_id
 * 3、利用顶级学科cg_id请求接口获取对应的子级学科数据
 * 4、根据数据动态生成option，插入到子级学科下拉列表中
 * */
$(document).on('change', '#category-top-select', function() {
  var data = {
    cg_id: $(this).val()  // 顶级学科cg_id
  };

  // 获取子级列表数据，生成option填充到子级select
  $.get('/v6/category/child', data, function(data) {
    var html = '';
    var result = data.result;

    for(var i = 0, len = result.length; i < len; i++) {
      html += '<option value="' + result[i].cg_id + '">' + result[i].cg_name + '</option>';
    }

    $('#category-child-select').html(html);
  });
});