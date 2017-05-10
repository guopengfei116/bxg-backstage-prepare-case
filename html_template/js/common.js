$('.navs ul').prev('a').on('click', function () {
	$(this).next().slideToggle();
});