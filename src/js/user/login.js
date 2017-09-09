require('../common/loading.js');
var userinfo = require('../common/userinfo.js');  // 读取storage用户信息

/**
 * 展示历史登陆用户头像：
 * 1、获取本地存储的用户信息
 * 2、头像展示到页面中
 */
var userData = userinfo.get();
$('.avatar img').attr('src', userData.tc_avatar);

/**
 * 登陆：
 * 1、ajaxForm方法会自动监听表单submit事件
 * 然后阻止浏览器默认的刷新提交，转而以ajax的方式发送请求
 * 2、登陆成功后存储服务器返回的用户信息，然后跳转到首页
 * */
$('#login-form').ajaxForm(function(data) {
  if(data.code == 200) {
    alert('登陆成功');
    userinfo.set(data.result);
    location.href = '/dist';
  }
});
