$(document).ready(function(){
	$('#hamburger').on('click', function(e){
		$('header ul').toggleClass('slideDown');
	});
});