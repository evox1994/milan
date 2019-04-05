$(document).ready(function(){

	function Lines(){
		var ww = $(window).outerWidth();
		var w1 = $('.b-4 .gray-line').outerWidth();
		var w2 = $('.b-4 .green-line').outerWidth();
		var dw = 0;

		if ( ww > 1230 ){
			dw = (ww - 1230)/2;
			w1 = w1 + dw;
			w2 = w2 + dw;
			$('.b-4 .gray-line').width(w1);
			$('.b-4 .green-line').width(w2);
		}
	}
	Lines();

});