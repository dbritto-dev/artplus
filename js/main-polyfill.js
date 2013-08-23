// use jquery to animation, animation is regular
var bodyAsideShow = true;
$(window).scroll(function() {
	if ($(window).height() <= $(window).scrollTop()) {
		$('#body').css({marginTop: $(window).height()});
		if (bodyAsideShow) {
			$('#body aside').animate({position: 'fixed', left: '0'}, 500);
		}
		bodyAsideShow = false;
	} else {
		$('#body').css({marginTop: $(window).scrollTop()});
		if (!bodyAsideShow) {
			$('#body aside').animate({position: 'absolute', left: '-100'}, 500);
		}
		bodyAsideShow = true;			
	}
});