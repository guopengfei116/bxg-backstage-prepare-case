// 退出功能
$('#btn-logout').on('click', function() {
  $.post('/v6/logout', function(data) {
    if(data.code == 200) {
      alert('退出成功');
      location.href = '/dist/html/user/login.html';
    };
  });
});