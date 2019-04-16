$(document).ready(function(){

	$('body').on('click','.b-3 .filter li a',function(){
		var el = $(this).attr('href');
		var btn = this;

		if ( !$(this).parents('li').hasClass('active') ){
			$(this).parents('.filter').find('li').removeClass('active');
			$(this).parents('li').addClass('active');
			$(this).parents('.container').find('.item').animate({opacity: 0},300);
			setTimeout(function(){
				$(btn).parents('.container').find('.item').removeClass('active');
				$(btn).parents('.container').find(el).addClass('active');
				$(btn).parents('.container').find('.item').animate({opacity: 1},300);
			},300);
		}
		return false;
	});

});