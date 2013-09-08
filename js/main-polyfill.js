// use jquery to animation, animation is regular
var menu_aside_show = true;
$(window).scroll(function() {
	var $container = $('.grid');
	if ($(window).height() <= $(window).scrollTop()) {
		if (menu_aside_show) {
			$('#body aside').animate({position: 'fixed', left: '0'}, 500);
			$('#body .content .sections').css({position: 'relative'});
			$('#body').css({marginTop: $(window).height()});
		}
		menu_aside_show = false;
	} else {
		if (!menu_aside_show) {
			$('#body aside').animate({position: 'absolute', left: '-100'}, 500);
			$('#body .content .sections').css({position: 'fixed'});
			$('#body').css({marginTop: '0'});
		}
		menu_aside_show = true;			
	}
});