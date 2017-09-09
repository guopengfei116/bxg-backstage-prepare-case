require('../common/loading.js');
require('../common/header.js');
require('../common/aside.js');

/**
 * 修改密码：
 * 1、监听表单提交事件，阻止默认的刷新提交
 * 2、校验新密码与确认密码
 * 3、不通过终止提交，通过转ajax方式提交
 * 4、密码修改成功后退出并跳转到登陆页
 * */
$('#repass-form').on('submit', function() {

  // 校验
  var newPass = $('#input-pass').val();
  var newPassRepeat = $('#input-pass-repeat').val();
  if(newPass !== newPassRepeat) {
    alert('两次密码输入不一致');
    return false;
  }

  // ajax提交，成功后触发头部的退出功能
  $(this).ajaxSubmit(function(data) {
    if(data.code == 200) {
      alert('密码修改成功');
      $('#btn-logout').trigger('click');
    }
  });

  return false;
});
