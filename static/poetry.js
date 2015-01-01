$(document).ready(function(){
	$('.poem-title').on('click', function(){
		if ($(this).hasClass('selected')){
			var a = $(this);
			$('.poem-body').fadeOut('slow'); 
			setTimeout(function(){
				$(a).siblings().fadeIn('slow');	
			}, 800);
			$(this).removeClass('selected');
		} else {
			$('.intro').hide('slow');
			$(this).addClass('selected');
			var value = $(this).text()
			var splitVal = value.split(/\s+/);
			var poemID = '#' + splitVal[0];
			$(this).siblings().fadeOut('slow', function(){
				$(poemID).fadeIn('slow');
			});
		};
	});
});
