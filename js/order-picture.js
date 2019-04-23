$(document).ready(function(){

	/*function containerSize(){
		var max_width = 0;
		$('.b-3-twenty-container img').each(function(){
			if ( $(this).width() > max_width ){
				max_width = $(this).width();
			}
		});
		$('.b-3-twenty-container').css('max-width',max_width);
	}
	containerSize();

	$(window).resize(function(){
		containerSize();
	});*/

	$(window).on('load',function(){
		$('.b-3-twenty-container').twentytwenty({
			before_label: 'Эскиз',
			after_label: 'Картина'
		});
	});

});