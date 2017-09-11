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
 * 2、提交数据前需要把省市县合成为(省|市|县)这样的数据格式，并通过tc_hometown字段传给后端
 * 3、修改成功后给出用户提示
 * */
$('#settings-form').ajaxForm({
  delegation: true,

  beforeSubmit: function(arr, $form, options) {

    // 合成(省|市|县)，添加tc_hometown字段
    var hometown = $('.hometown select')
      .map(function() {
        return $(this).find('option:selected').text();
      }).toArray().join('|');

    arr.push({ name: 'tc_hometown', value: '河北|张家口' });
  },

  success: function(data) {
    if(data.code == 200) {
      alert('修改成功');
    }
  }
});
