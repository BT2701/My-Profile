(function () {
	'use strict';

	if (!window.gsap || !window.ScrollTrigger) {
		return;
	}

	gsap.registerPlugin(ScrollTrigger);
	gsap.defaults({ ease: 'power3.out', duration: 0.85 });
	ScrollTrigger.config({ ignoreMobileResize: true });

	var revealSelector = [
		'.about-desc',
		'.focus-card',
		'.timeline-label',
		'.featured-work',
		'.work-card',
		'.skill-group',
		'.edu-card',
		'.github-panel',
		'.contact-card',
		'.hire',
		'.contact-form',
		'.project-row:not(.hidden-project)'
	].join(', ');

	var mm = gsap.matchMedia();

	mm.add(
		{
			isDesktop: '(min-width: 769px)',
			isMobile: '(max-width: 768px)',
			reduceMotion: '(prefers-reduced-motion: reduce)'
		},
		function (context) {
			var isDesktop = context.conditions.isDesktop;
			var reduceMotion = context.conditions.reduceMotion;
			var distance = isDesktop ? 40 : 22;

			if (reduceMotion) {
				gsap.set(revealSelector, { autoAlpha: 1, y: 0, x: 0, scale: 1, clearProps: 'transform' });
				return;
			}

			var hero = gsap.timeline({ defaults: { ease: 'power3.out' } });
			hero
				.from('.hero-portrait img', { scale: 1.06, duration: 1.25, ease: 'power2.out' }, 0)
				.from('.hero-kicker', { y: 14, duration: 0.55 }, 0.08)
				.from('#colorlib-hero h1', { y: 22, duration: 0.7 }, 0.14)
				.from('.hero-lead', { y: 16, duration: 0.55 }, 0.22)
				.from('.hero-actions .btn', { y: 12, duration: 0.45, stagger: 0.06 }, 0.3)
				.from('.hero-stats > div', { y: 12, duration: 0.45, stagger: 0.05 }, 0.38);

			if (isDesktop) {
				gsap.to('.hero-portrait img', {
					yPercent: 10,
					ease: 'none',
					scrollTrigger: {
						trigger: '#colorlib-hero',
						start: 'top top',
						end: 'bottom top',
						scrub: 0.7
					}
				});
			}

			gsap.utils.toArray(revealSelector).forEach(function (el) {
				gsap.from(el, {
					autoAlpha: 0,
					y: distance,
					duration: 0.75,
					scrollTrigger: {
						trigger: el,
						start: 'top 92%',
						once: true
					}
				});
			});

			return function () {
				hero.kill();
			};
		}
	);

	window.addEventListener('projects:toggled', function (event) {
		var rows = document.querySelectorAll('.project-row.hidden-project');
		if (!rows.length) {
			return;
		}

		if (event.detail && event.detail.expanded) {
			if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
				gsap.fromTo(
					rows,
					{ autoAlpha: 0, y: 18 },
					{ autoAlpha: 1, y: 0, duration: 0.45, stagger: 0.05, ease: 'power2.out', overwrite: 'auto' }
				);
			}
		}

		ScrollTrigger.refresh();
	});
}());
