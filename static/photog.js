$(function(){
	$('#about').addClass('active');
	$('#work').click(function(){
		$('.main-wrapper').children().fadeOut('slow');
		$('#mywork').fadeIn('slow');
		$('.navigation').children().removeClass('active');
		$(this).addClass('active');
	});
	$('#about').click(function(){
		$('.main-wrapper').children().fadeOut('slow');
		$('#aboutme').fadeIn('slow');
		$('.navigation').children().removeClass('active');
		$(this).addClass('active');
	});
	$('#equipment').click(function(){
		$('.main-wrapper').children().fadeOut('slow');
		$('#cameras').fadeIn('slow');
		$('.navigation').children().removeClass('active');
		$(this).addClass('active');
	});
	$('#contact').click(function(){
		$('.main-wrapper').children().fadeOut('slow');
		$('#contactme').fadeIn('slow');
		$('.navigation').children().removeClass('active');
		$(this).addClass('active');
	});
});
