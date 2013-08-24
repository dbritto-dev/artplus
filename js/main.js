// user transitions to animation, animation is better
var menu_aside_show = true;
$(window).scroll(function() {
	var $container = $('.grid');
	if ($(window).height() <= $(window).scrollTop()) {
		if (menu_aside_show) {
			$('#body aside').toggleClass('active');
			$('#body .content .sections').css({position: 'relative'});
			$('#body').css({marginTop: $(window).scrollTop()});
            $container.packery({itemSelector: '.block'});
		}
		menu_aside_show = false;
	} else {
		if (!menu_aside_show) {
			$('#body aside').toggleClass('active');
			$('#body .content .sections').css({position: 'fixed'});
			$('#body').css({marginTop: '0'});
            $container.packery({itemSelector: '.block'});
		}
		menu_aside_show = true;			
	}
});
