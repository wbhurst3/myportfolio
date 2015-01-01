$(document).ready(function(){
	$('.header ul a').each(function(){
		if ($(this).attr('href') == window.location.pathname) {
			$(this).addClass('current');
		}
	})
});