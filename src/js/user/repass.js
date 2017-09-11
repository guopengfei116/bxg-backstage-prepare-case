require('../common/loading.js');
require('../common/header.js');
require('../common/aside.js');

/**
 * 修改密码：
 * 1、使用插件ajaxForm方法把表单刷新提交转ajax提交
 * 2、配置提交前的钩子函数，校验新密码与确认密码，不一致return false终止提交
 * 3、配置成功回调，修改成功后退出并跳转到登陆页
 * */
$('#repass-form').ajaxForm({

  // 提交前做密码校验
  beforeSubmit: function(arr, $form, options) {
    var newPass = $('#input-pass').val();
    var newPassRepeat = $('#input-pass-repeat').val();
    if(newPass !== newPassRepeat) {
      alert('两次密码输入不一致');
      return false;
    }
  },

  // 提交成功后给出用户提示，并退出登陆
  success: function(data) {
    if(data.code == 200) {
      alert('密码修改成功');
      $('#btn-logout').trigger('click');
    }
  }
});

