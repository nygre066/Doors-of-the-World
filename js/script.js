$(document).ready(function() {
	

//back to top button
$(window).scroll(function() {
    if ($(this).scrollTop() > 300) {
        $('#toTop:hidden').stop(true, true).fadeIn();
    } else {
        $('#toTop').stop(true, true).fadeOut();
    }
});

