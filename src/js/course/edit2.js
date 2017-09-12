require('../common/loading.js');
require('../common/header.js');
require('../common/aside.js');
var util = require('../common/util.js');

/**
 * 功能点：
 * 1、数据回显
 * 2、上传图片
 * 3、裁剪图片
 * */
var cs_id = util.parseSearch('cs_id');

/**
 * 数据回显：
 * 1、获取location.search中cs_id的值
 * 2、调用接口获取数据
 * 3、获取模版引擎数据渲染后的模版，插入指定元素
 * */
$.get('/v6/course/picture', { cs_id: cs_id }, function(data) {
  if(data.code == 200) {
    data.result.editIndex = 2;
    $('.course-edit').append(template('course-edit2-tpl', data.result));
  }
});