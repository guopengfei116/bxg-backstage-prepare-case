require('../common/loading.js');
require('../common/header.js');
require('../common/aside.js');

/**
 * 学科分类列表：
 * 1、请求接口获取数据
 * 2、通过模版引擎获取数据渲染后的模版，然后插入到页面指定位置
 * */
$.get('/v6/category', function(data) {
  if(data.code === 200) {
    $('#category-list-table').append(template('category-list-tpl', data.result));
  }
});