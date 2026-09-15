; (function () {

	'use strict';



	var isMobile = {
		Android: function () {
			return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function () {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function () {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function () {
			return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function () {
			return navigator.userAgent.match(/IEMobile/i);
		},
		any: function () {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	var fullHeight = function () {

		if (!isMobile.any()) {
			$('.js-fullheight').css('height', $(window).height());
			$(window).resize(function () {
				$('.js-fullheight').css('height', $(window).height());
			});
		}

	};

	var counter = function () {
		$('.js-counter').countTo({
			formatter: function (value, options) {
				return value.toFixed(options.decimals);
			},
		});
	};

	var counterForRealNumber = function () {
		$('.js-counter-real-number').countTo({
			decimals: 2,
			formatter: function (value, options) {
				return value.toFixed(options.decimals);
			},
		});
	};


	var counterWayPoint = function () {
		if ($('#colorlib-counter').length > 0) {
			$('#colorlib-counter').waypoint(function (direction) {

				if (direction === 'down' && !$(this.element).hasClass('animated')) {
					setTimeout(function () {
						counter();
						counterForRealNumber();
					}, 400);
					$(this.element).addClass('animated');
				}
			}, { offset: '90%' });
		}
	};

	// Animations
	var contentWayPoint = function () {
		var i = 0;
		$('.animate-box').waypoint(function (direction) {

			if (direction === 'down' && !$(this.element).hasClass('animated')) {

				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function () {

					$('body .animate-box.item-animate').each(function (k) {
						var el = $(this);
						setTimeout(function () {
							var effect = el.data('animate-effect');
							if (effect === 'fadeIn') {
								el.addClass('fadeIn animated');
							} else if (effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated');
							} else if (effect === 'fadeInRight') {
								el.addClass('fadeInRight animated');
							} else {
								el.addClass('fadeInUp animated');
							}

							el.removeClass('item-animate');
						}, k * 200, 'easeInOutExpo');
					});

				}, 100);

			}

		}, { offset: '85%' });
	};


	var burgerMenu = function () {

		$('.js-colorlib-nav-toggle').on('click', function (event) {
			event.preventDefault();
			var $this = $(this);

			if ($('body').hasClass('offcanvas')) {
				$this.removeClass('active');
				$('body').removeClass('offcanvas');
			} else {
				$this.addClass('active');
				$('body').addClass('offcanvas');
			}
		});



	};

	// Click outside of offcanvass
	var mobileMenuOutsideClick = function () {

		$(document).click(function (e) {
			var container = $("#colorlib-aside, .js-colorlib-nav-toggle");
			if (!container.is(e.target) && container.has(e.target).length === 0) {

				if ($('body').hasClass('offcanvas')) {

					$('body').removeClass('offcanvas');
					$('.js-colorlib-nav-toggle').removeClass('active');

				}

			}
		});

		$(window).scroll(function () {
			if ($('body').hasClass('offcanvas')) {

				$('body').removeClass('offcanvas');
				$('.js-colorlib-nav-toggle').removeClass('active');

			}
		});

	};

	var clickMenu = function () {

		$('#navbar a:not([class="external"])').click(function (event) {
			var section = $(this).data('nav-section');
			var navbar = $('#navbar');
			var target = $('[data-section="' + section + '"]');

			$('body').removeClass('offcanvas');
			$('.js-colorlib-nav-toggle').removeClass('active');

			if (navbar.is(':visible')) {
				navbar.removeClass('in');
				navbar.attr('aria-expanded', 'false');
			}

			window.setTimeout(function () {
				if (target.length) {
					var offset = $(window).width() <= 768 ? 72 : 24;
					$('html, body').stop(true).animate({
						scrollTop: target.offset().top - offset
					}, 500);
				}
			}, 80);

			event.preventDefault();
			return false;
		});


	};

	// Reflect scrolling in navigation
	var navActive = function (section) {

		var $el = $('#navbar > ul');
		$el.find('li').removeClass('active');
		$el.each(function () {
			$(this).find('a[data-nav-section="' + section + '"]').closest('li').addClass('active');
		});

	};

	var navigationSection = function () {

		var $section = $('section[data-section]');

		$section.waypoint(function (direction) {

			if (direction === 'down') {
				navActive($(this.element).data('section'));
			}
		}, {
			offset: '150px'
		});

		$section.waypoint(function (direction) {
			if (direction === 'up') {
				navActive($(this.element).data('section'));
			}
		}, {
			offset: function () { return -$(this.element).height() + 155; }
		});

	};






	var sliderMain = function () {
		if (!$('#colorlib-hero .flexslider').length) {
			return;
		}

		$('#colorlib-hero .flexslider').flexslider({
			animation: "fade",
			slideshowSpeed: 5000,
			directionNav: true,
			start: function () {
				setTimeout(function () {
					$('.slider-text').removeClass('animated fadeInUp');
					$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
				}, 500);
			},
			before: function () {
				setTimeout(function () {
					$('.slider-text').removeClass('animated fadeInUp');
					$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
				}, 500);
			}

		});

	};

	var stickyFunction = function () {

		var h = $('.image-content').outerHeight();

		if ($(window).width() <= 992) {
			$("#sticky_item").trigger("sticky_kit:detach");
		} else {
			$('.sticky-parent').removeClass('stick-detach');
			$("#sticky_item").trigger("sticky_kit:detach");
			$("#sticky_item").trigger("sticky_kit:unstick");
		}

		$(window).resize(function () {
			var h = $('.image-content').outerHeight();
			$('.sticky-parent').css('height', h);


			if ($(window).width() <= 992) {
				$("#sticky_item").trigger("sticky_kit:detach");
			} else {
				$('.sticky-parent').removeClass('stick-detach');
				$("#sticky_item").trigger("sticky_kit:detach");
				$("#sticky_item").trigger("sticky_kit:unstick");

				$("#sticky_item").stick_in_parent();
			}




		});

		$('.sticky-parent').css('height', h);

		$("#sticky_item").stick_in_parent();

	};

	var owlCrouselFeatureSlide = function () {
		$('.owl-carousel').owlCarousel({
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			autoplay: true,
			loop: true,
			margin: 0,
			nav: true,
			dots: false,
			autoHeight: true,
			items: 1,
			navText: [
				"<i class='icon-arrow-left3 owl-direction'></i>",
				"<i class='icon-arrow-right3 owl-direction'></i>"
			]
		})
	};

	var scrollToSection = function () {
		$('.js-scroll-to').on('click', function (event) {
			var target = $(this).data('target');

			if (target && $(target).length) {
				var offset = $(window).width() <= 768 ? 72 : 24;
				$('html, body').animate({
					scrollTop: $(target).offset().top - offset
				}, 500);
			}

			event.preventDefault();
			return false;
		});
	};

	var contactForm = function () {
		$('#contact-form').on('submit', function (event) {
			event.preventDefault();

			var name = $('#contact-name').val().trim();
			var email = $('#contact-email').val().trim();
			var subject = $('#contact-subject').val().trim();
			var message = $('#message').val().trim();
			var body = 'From: ' + name + ' (' + email + ')\n\n' + message;
			var note = document.getElementById('form-note');

			window.location.href = 'mailto:dttruong2701@gmail.com?subject=' +
				encodeURIComponent(subject) +
				'&body=' +
				encodeURIComponent(body);

			if (note) {
				note.textContent = 'Draft opened in your mail client.';
			}
		});
	};

	var copyEmail = function () {
		$('.copy-email').on('click', async function () {
			var email = this.getAttribute('data-email');
			var button = this;

			if (!email) {
				return;
			}

			try {
				await navigator.clipboard.writeText(email);
				button.textContent = 'Copied';
			} catch (error) {
				window.prompt('Copy email address', email);
			}

			window.setTimeout(function () {
				button.textContent = 'Copy';
			}, 1800);
		});
	};

	// Document on load.
	$(function () {
		fullHeight();
		counterWayPoint();
		contentWayPoint();
		burgerMenu();

		clickMenu();
		navigationSection();
		scrollToSection();
		contactForm();

		mobileMenuOutsideClick();
		sliderMain();
		stickyFunction();
		owlCrouselFeatureSlide();

		copyEmail();

		var yearNode = document.getElementById('copyright-year');
		if (yearNode) {
			yearNode.textContent = String(new Date().getFullYear());
		}
	});


}());

const btn = document.querySelector('.btn-load-toggle');
const hiddenProjects = document.querySelectorAll('.hidden-project');
let expanded = false;

if (btn) {
	btn.addEventListener('click', function (e) {
		e.preventDefault();
		if (!expanded) {
			hiddenProjects.forEach(function (el) {
				el.style.display = 'flex';
			});
			btn.innerHTML = 'Show fewer projects <i class="icon-minus"></i>';
			btn.setAttribute('aria-expanded', 'true');
			expanded = true;
		} else {
			hiddenProjects.forEach(function (el) {
				el.style.display = 'none';
			});
			btn.innerHTML = 'Show more projects <i class="icon-plus"></i>';
			btn.setAttribute('aria-expanded', 'false');
			expanded = false;
		}
	});
}