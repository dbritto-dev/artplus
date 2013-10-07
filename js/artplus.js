// user transitions to animation, animation is better
var menu_aside_show = true;
if ($('.header').length >0) {
	$(window).scroll(function() {
		
		if ($(window).height() <= $(window).scrollTop()) {
			if (menu_aside_show) {
				$('.body__content__sections__section--design, .header').css('position', 'relative');
				$('.body__content__sections__section--architecture').css('marginTop', '0');
				$('.body__menu').toggleClass('body__menu--active');
			}
			menu_aside_show = false;
		} else {
			if (!menu_aside_show) {
				$('.body__content__sections__section--design').css('position', 'fixed');
				$('.header').css('position', 'absolute');
				$('.body__content__sections__section--architecture').css('marginTop', '200%');
				$('.body__menu').toggleClass('body__menu--active');
			}
			menu_aside_show = true;			
		}
	});
} else {
	$('.body__menu').addClass('body__menu--active');
}
