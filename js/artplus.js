// user transitions to animation, animation is better
var menu_aside_show = true;
$(window).scroll(function() {
	if ($(window).height() <= $(window).scrollTop()) {
		if (menu_aside_show) {
			$('.body__content__sections, .header').css({position: 'relative'});
			$('.body__menu').toggleClass('body__menu--active');
		}
		menu_aside_show = false;
	} else {
		if (!menu_aside_show) {
			$('.header').css({position: 'absolute'});
			$('.body__menu').toggleClass('body__menu--active');
			$('.body__content__sections').css({position: 'fixed'});
		}
		menu_aside_show = true;			
	}
});
