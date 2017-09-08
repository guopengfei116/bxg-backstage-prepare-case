// loading
$(document).on('ajaxStart', function() {
  $('.overlay').show();
}).on('ajaxStop', function() {
  $('.overlay').hide();
});
