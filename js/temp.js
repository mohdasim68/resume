/* redclass */
$(".panel_box .color_panel .red_color").click(function () {
	$("#home button").addClass("btn-outline-red").removeClass("btn-outline-green btn-outline-blue btn-outline-yellow btn-outline-orange btn-outline-skyblue");
	$("body").addClass("red_color_bar").removeClass("green_color_bar blue_color_bar yellow_color_bar orange_color_bar skyblue_color_bar");
});
/* greenclass */
$(".panel_box .color_panel .green_color").click(function () {
	$("#home button").addClass("btn-outline-green").removeClass("btn-outline-red btn-outline-blue btn-outline-yellow btn-outline-orange btn-outline-skyblue");	
	$("body").addClass("green_color_bar").removeClass("red_color_bar blue_color_bar yellow_color_bar orange_color_bar skyblue_color_bar");
});
/* blueclass */
$(".panel_box .color_panel .blue_color").click(function () {
	$("#home button").addClass("btn-outline-blue").removeClass("btn-outline-green btn-outline-red btn-outline-yellow btn-outline-orange btn-outline-skyblue");
	$("body").addClass("blue_color_bar").removeClass("green_color_bar yellow_color_bar orange_color_bar skyblue_color_bar red_color_bar");
});
/* yellowclass */
$(".panel_box .color_panel .yellow_color").click(function () {
	$("#home button").addClass("btn-outline-yellow").removeClass("btn-outline-green btn-outline-blue btn-outline-red btn-outline-orange btn-outline-skyblue");
	$("body").addClass("yellow_color_bar").removeClass("red_color_bar green_color_bar blue_color_bar orange_color_bar skyblue_color_bar");
});
/* orangeclass */
$(".panel_box .color_panel .orange_color").click(function () {
	$("#home button").addClass("btn-outline-orange").removeClass("btn-outline-green btn-outline-blue btn-outline-yellow btn-outline-red btn-outline-skyblue");
	$("body").addClass("orange_color_bar").removeClass("red_color_bar green_color_bar yellow_color_bar blue_color_bar skyblue_color_bar");
});
/* skyblueclass */
$(".panel_box .color_panel .skyblue_color").click(function () {
	$("#home button").addClass("btn-outline-skyblue").removeClass("btn-outline-green btn-outline-blue btn-outline-yellow btn-outline-orange btn-outline-red");
	$("body").addClass("skyblue_color_bar").removeClass("red_color_bar green_color_bar blue_color_bar orange_color_bar yellow_color_bar");
});

$(" .spinner_button").click(function (event) {
event.preventDefault();
if ( $(this).hasClass("inOut")) {
	$(".panel_box").stop().animate({left:"0px"},500)
	}
	else {
	$(".panel_box").stop().animate({left:"-100px"},500)
	}
	$(this).toggleClass("inOut");
	return false;
});

/* ripple effect */
jQuery(document).ready(function () {
	"use strict"
	$('.ripple').ripples({
  dropRadius: 20,
  perturbance: 0.01,
  
});
});
/* scroll effect*/
var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null,    // optional scroll container selector, otherwise use window,
    resetAnimation: true,     // reset animation on end (default is true)
  }
);
wow.init();