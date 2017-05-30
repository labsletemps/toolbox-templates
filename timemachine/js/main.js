jQuery(document).ready(function($) 
{

	// ANIMATION D'INTRODUCTION AVEC GSAP. PREND EN COMPTE LA LARGEUR POUR RACCOURCIR SI MOBILE
	var $introDone = false;
	var	$overlay = $('.overlay'),
		$logoLt = $('.overlay .logo-brand'),
		$spinner = $('.spinner'),
		$h1 = $('h1'),
		$h2 = $('h2'),
		tlIntroduction;

	tlIntroduction =  new TimelineMax({ paused: false }); 

	tlIntroduction
		.set($overlay, {autoAlpha: 1})
		//.set([$h1], {yPercent: '-10'})
		.to([$spinner, $logoLt], 0.7, {opacity: 0, ease: Power4.easeOut}, '+=1.5')
		.to($overlay, 1.5, {autoAlpha: 0, ease:Linear.easeNone}, '-=0.5');

	// INIT DU SLIDER
	$('.slider').bxSlider({
	  slideMargin: 5,
	  pager: false,
	  touchEnabled: false,
	  mode: 'vertical'
	});

	// A L'INTERIEUR DU SLIDER, ON INIT TWENTYTWENTY SUR CHAQUE JEU DE PHOTOS
	$(window).load(function() {
        $(".twentytwenty-container").twentytwenty();

        $(window).resize(function(){
	   		$(this).trigger('resize.twentytwenty');
	    });
    });

	// ON RELOAD QUAND ON CHANGE D'ORIENTATION LE MOBILE POUR NE PAS LAISSER EN MAUVAIS ETAT
	$( window ).on( "orientationchange", function( event ) {
	  	location.reload();
	});

	// LE BOUTON D'ACCUEIL PROVOQUE L'APPARITION DES CONTRÔLE MASQUéS AU DEBUT AINSI QUE LE PREMIER SLIDE
    $(".btn-begin").on('click', function(e) {
		$('.controls').addClass('is-visible');
    	$(".bx-next").trigger("click");
	});

    // CUSTOM SLIDE BUTTONS
	$(".btn-prev").on('click', function(e) {
    	$(".bx-prev").trigger("click");
	});
	$(".btn-next").on('click', function(e) {
    	$(".bx-next").trigger("click");
	});
	
});
