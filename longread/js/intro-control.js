jQuery(document).ready(function($) 
{

	// INTRO RACOURCIE SI SUR MOBILE
	var $h1Timing;
	if ($(window).width() > 1200 )
	{
		$hVideoWrapperTiming = '+=5.0';
		$h1Timing = '+=1.0';
	} 
	else
	{
		$hVideoWrapperTiming = '+=0.1';
		$h1Timing = '+=0.1';
	}

	// ANIMATION D'INTRODUCTION AVEC GSAP. PREND EN COMPTE LA LARGEUR POUR RACCOURCIR SI MOBILE
	var $introDone = false;
	var $hVideoWrapper = $('header .video-wrapper'),
		$overlay = $('.overlay'),
		$logoLt = $('.overlay .logo-lt-blanc'),
		$spinner = $('.spinner'),
		$h1 = $('header h1'),
		$separateur = $('header .separateur'),
		$h2 = $('h2'),
		//$h6 = $('h6'),
		$scrollIndicator = $('.scroll-indicator'),
		tlIntroduction;

	tlIntroduction =  new TimelineMax({ paused: false });

	tlIntroduction
		.set([$scrollIndicator], {yPercent: '105'})
		.set([$h1, $separateur, $h2], {autoAlpha: 0})
		.set([$h1], {yPercent: '-10'})
		.to([$spinner, $logoLt], 0.7, {autoAlpha: 0, ease: Power4.easeOut}, '+=1.5')
		.to($overlay, 1.5, {autoAlpha: 0, ease:Linear.easeNone}, '-=0.5')
		//.set($hVideoWrapper, {className: '+=is-blurred'}, $hVideoWrapperTiming)
		.to([$h1, $separateur], 5, {autoAlpha: 1, yPercent: '0', ease: Power4.easeOut}, $h1Timing)
		//.to($separateur, 3, {autoAlpha: 1, xPercent: '0', ease: Power4.easeOut}, '-=1.0')
		.to($h2, 3, {autoAlpha: 1, ease: Power4.easeOut}, '-=3.5')
		//.to($h6, 3, {autoAlpha: 1, ease: Power4.easeOut}, '-=1.5')
		.to($scrollIndicator, 1, {yPercent: '2', ease: Power4.easeOut, onComplete: setIntroDone}, '-=1.0');

	// FONCTION QUI ACTIVE LES EFFETS LORS DE SCROLL SUR SCROLL INDICATOR ET SUR LE TITRE. S'ACTIVE UNE FOIS L'INTRO EFFECTUEE SEULEMENT
	//setIntroDone();
	function setIntroDone(){
		// init controller
		var ctrlTitle = new ScrollMagic.Controller();
		var title = $('.header__content__container__box');
		// build scene
		var scene = new ScrollMagic.Scene({
			triggerHook: 'onEnter',
			duration: 500,
			offset: 0
		})
			.setTween(title, {autoAlpha: 0, yPercent: '-100%', ease: Power0.easeInOut, clearProps: 'all'}) 
			//.addIndicators({name: "2 (duration: 300)"}) // add indicators (requires plugin)
			.addTo(ctrlTitle);

		// init controller
		var ctrlScrollIndicator = new ScrollMagic.Controller();
		// build scene
		var scene = new ScrollMagic.Scene({
			triggerHook: 'onEnter',
			duration: 500,
			offset: 0
		})
			.setTween($scrollIndicator, {yPercent: '105', ease: Power0.easeInOut}) 
			//.addIndicators({name: "2 (duration: 300)"}) // add indicators (requires plugin)
			.addTo(ctrlScrollIndicator);
	}

});