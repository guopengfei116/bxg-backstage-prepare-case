// 一、用户信息展示

// 1.1、获取本地存储的用户信息，解析为js对象方便使用
var userInfoStr = $.cookie('userInfo');
var userInfoObj = JSON.parse(userInfoStr);

// 1.2、拼接用户信息模版字符串
var prifileTpl =
  '<div class="profile">' +
      '<div class="avatar img-circle">' +
          '<img src={{ tc_avatar? tc_avatar: "/img/default.png" }}>' +
      '</div>' +
      '<h4>{{ tc_name }}</h4>' +
  '</div>';

// 1.3、调用模版引擎的compile方法编译这个模版字符串，得到一个渲染函数
var userInfoRender = template.compile(prifileTpl);

// 1.3、调用渲染函数，把要渲染的数据传入进去，就会得到一个完整的html
var userInfoHTML = userInfoRender(userInfoObj);

// 1.5、最后把这个html替换到页面指定位置
$('.aside').prepend(userInfoHTML);


// 二、下拉列表，点击父标签，展示隐藏ul列表
$('.navSlide').on('click', function() {
  $(this).next().slideToggle();
});


// 三、根据页面定位左侧导航焦点
/**
 * 根据一些页面规律进行焦点
 * 1、获取当前页面的路径
 * 2、移除所有a标签的active类名
 * 3、把路径当做属性选择器选择页面对应的a标签，给对应的a标签单独添加
 * */
var pathname = location.pathname;
$('.navs a').removeClass('active').filter('[href="' + pathname + '"]').addClass('active');