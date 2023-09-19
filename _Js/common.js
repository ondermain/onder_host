$(function(){
	setTimeout(function() {
	  $('#doc').addClass('show');
	  $('.fix-nav').addClass('over');
	  $('.msec-01').addClass('active');
	}, 200);
	
	footerCon = $('#footer-wrap').detach();
	$('.section-wrap').append(footerCon);
});	
function sizeControls(width) {
	width = parseInt(width);
	var bodyHeight = document.documentElement.clientHeight; 
	var bodyWidth = document.documentElement.clientWidth; 
	var docW = $('#doc').innerWidth();
	
	
}
jQuery(function($){
	sizeControls($(this).width());
	$(window).resize(function() {
		if(this.resizeTO) {
			clearTimeout(this.resizeTO);
		}
		this.resizeTO = setTimeout(function() {
			$(this).trigger('resizeEnd');
		}, 10);
	});
});	
$(window).on('resizeEnd', function() {
	sizeControls($(this).width());
});
$(window).load( function() { 
	sizeControls($(this).width());
});


