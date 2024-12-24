$(document).ready(function () {

	const HEADER = $('header');
	const NAV_LINKS = $('.nav-links');
	const HAMBURGER_BTN = $('.hamburger-button');

	const MIN_LAPTOP_SCREEN = 769;


	$(".hamburger-button").click(function () {
		$(this).toggleClass('crossed')
		NAV_LINKS.toggleClass('active')
	})

	$(window).resize(function () {
		if (window.innerWidth >= MIN_LAPTOP_SCREEN) {
			NAV_LINKS.removeClass('active');
			HAMBURGER_BTN.removeClass('crossed');
		}
	})

	$(window).click(function (event) {
		if (event.target.className.includes('nav-link')) {
			NAV_LINKS.removeClass('active');
			HAMBURGER_BTN.removeClass('crossed');
		}
	})

	$(window).on('scroll', function () {
		const scrollTop = $(window).scrollTop();
		if (scrollTop <= 40 && HEADER.attr('class') !== 'blured') {
			HEADER.addClass('blured');
			HEADER.removeClass('dark');

		} else if (scrollTop > 40 && HEADER.hasClass('blured')) {
			HEADER.removeClass('blured');
			HEADER.addClass('dark');
		}
	});

})