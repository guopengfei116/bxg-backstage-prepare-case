/**
 * ajax loading:
 * 1、编写公共的loading模版
 * 2、把loading模版放入页面
 * 3、监听ajaxStart事件，触发时显示loading
 * 4、监听ajaxStop事件，触发时隐藏loading
 * */
var loadingTpl =
  '<div class="overlay">' +
    '<img src="/public/img/loading.gif">' +
  '</div>';

$('body').append(loadingTpl)

$(document)
  .on('ajaxStart', function() {
    $('.overlay').show();
  })
  .on('ajaxStop', function() {
    $('.overlay').hide();
  });