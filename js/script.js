$(document).ready(function() {

	const NAV_LINKS = $('.nav-links');
	const HAMBURGER_BTN = $('.hamburger-button');

	const MIN_LAPTOP_SCREEN = 769;


	$(".hamburger-button").click(function() {
		$(this).toggleClass('crossed')
		NAV_LINKS.toggleClass('active')
	})

	$(window).resize(function() {
		if (window.innerWidth >= MIN_LAPTOP_SCREEN) {
			NAV_LINKS.removeClass('active');
			HAMBURGER_BTN.removeClass('crossed');
		}
	})

	$(window).click(function(event) {
		if (event.target.className.includes('nav-link')) {
			NAV_LINKS.removeClass('active');
			HAMBURGER_BTN.removeClass('crossed');
		}
	})
})