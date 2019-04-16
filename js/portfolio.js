$(document).ready(function(){

	$('body').on('click','.b-1 .filter li a',function(){
		var el = $(this).attr('href');
		var btn = this;

		if ( !$(this).parents('li').hasClass('active') ){
			$(this).parents('.filter').find('li').removeClass('active');
			$(this).parents('li').addClass('active');
			$(this).parents('.b-1').find('.items').animate({opacity: 0},300);
			setTimeout(function(){
				$(btn).parents('.b-1').find('.item').removeClass('active');
				$(btn).parents('.b-1').find(el).addClass('active');
				$(btn).parents('.b-1').find('.items').animate({opacity: 1},300);
			},300);
		}
		return false;
	});

});