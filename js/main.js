$(window).load(function() {
	var bodyAsideShow = true;
	$(window).scroll(function() {
		if ($(window).height() <= $(window).scrollTop()) {
			$('#body').css({marginTop: $('#home').height()});
			if (bodyAsideShow) {
				$('#body aside').toggleClass('active');
			}
			bodyAsideShow = false;
		} else {
			$('#body').css({marginTop: $(window).scrollTop()});
			if (!bodyAsideShow) {
				$('#body aside').toggleClass('active');
			}
			bodyAsideShow = true;			
		}
	});
});
