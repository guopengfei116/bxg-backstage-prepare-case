require('../common/loading.js');
require('../common/header.js');
require('../common/aside.js');

/**
 * 数据回显：
 * 1、请求接口获取数据
 * 2、通过模版引擎获取数据渲染后的模版，然后插入到页面指定位置
 * */
$.get('/v6/teacher/profile', function(data) {
  if(data.code == 200) {
    $('.teacher-profile').html(template('teacher-profile-tpl', data.result));
  }
});

/**
 * 表单提交：
 * 1、因为数据要回写，造成表单是动态生成的，所以要委托的方式监听表单submit事件
 * 2、提交数据前需要把省市县三个值合成一个tc_hometown字段，合成后的数据格式为：省|市|县
 * 3、然后把合成后的
 * */
$(document).on('submit', '#settings-form', function(e) {
  e.preventDefault();

  // 把合成后省市县动态设入tc_hometown字段对应的表单
  var hometown =
    $('.hometown select').map(function() {
      return $(this).find('option:selected').text();
    })
    .toArray().join('|');
  $('#input-hometown').val(hometown);

  // ajax提交
  $(this).ajaxSubmit(function(data) {
    if(data.code == 200) {
      alert('修改成功');
    }
  });
});
