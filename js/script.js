$(document).ready(function() {

//back to top button
$(window).scroll(function() {
    if ($(this).scrollTop() > 300) {
        $('#toTop').fadeIn();
    } 

    else {
        $('#toTop').fadeOut();
    }

});

//headerchange on homepage
$(window).scroll(function() {
    if ($(this).scrollTop() > 240) {
        $('#homeinsideheader').fadeIn(200);
    } 

    else {
        $('#homeinsideheader').fadeOut(200);
    }

});

// Enables MixtItUp Plugin
$(function(){
	$('#mix').mixItUp();

});

//open pop up box with "x" button
$(".fancybox1").fancybox({
          helpers: {
              title : {
                  type : 'float'
              }
          }
      });

//makes background of pop up box grey
$(".fancybox1").fancybox({
    helpers : {
        overlay : {
            css : {
                'background' : 'rgba(10, 10, 10, 0.80)'
            }
        }
    }
});


});



