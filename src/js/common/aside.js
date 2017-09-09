var userinfo = require('../common/userinfo.js');  // 读取storage用户信息

/**
 * 展示用户信息：
 * 1、获取本地存储的用户信息
 * 2、拼接用户信息模版字符串
 * 3、通过模版引擎的compile方法编译模版字符串，得到渲染函数
 * 4、调用渲染函数，传入用户数据，得到渲染好的html片段
 * 5、最后把html放入到页面指定位置
 * */
var userinfoData = userinfo.get();  // 数据
var userTpl =                            // 模版
  '<div class="profile">' +
      '<div class="avatar img-circle">' +
          '<img src={{ tc_avatar }}>' +
      '</div>' +
      '<h4>{{ tc_name }}</h4>' +
  '</div>';
var userHTML = template.compile(userTpl)(userinfoData); // 渲染模版
$('.userinfo').replaceWith(userHTML); // 放入页面

/**
 * 导航，下拉列表显示隐藏：
 * 1、获取导航所有的a标签
 * 2、点击时获取下一个ul兄弟元素，让它显示隐藏
 * */
$('.navs a').on('click', function() {
  $(this).next('ul').slideToggle();
});

/**
 * 导航，默认焦点定位：
 * 1、获取当前页面的pathname
 * 2、获取导航所有的a标签
 * 2、移除它们的焦点样式类名active
 * 3、然后找出href属性与pathname相匹配的a标签，添加active类名
 * 4、然后把该a标签的所有父级元素设为显示状态，防止父元素被隐藏造成子元素也无法展示的问题
 * */
var pathname = location.pathname;
$('.navs a')
  .removeClass('active')
  .filter('[href="' + pathname + '"]').addClass('active')
  .parentsUntil('.navs').show();