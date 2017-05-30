jQuery(document).ready(function($) 
{

	// VIDEO CONTROL
	// starts header video automatically
	$videoHeader = $('header video');
	setTimeout(function() 
	{
		$videoHeader[0].play();
	}, 1000);

	// controls body videos depending if in viewport or not
	var windowW = $(window).width();
 
 	$(window).scroll(function(){
    	if ( ($('.trigger').is(':in-viewport')) && (windowW > 1000) ) {
		  	$('.trigger:in-viewport').parent().find('video')[0].play();
		}
		else
		{
			$('section.video video, .block-content video').each(function () {
		        this.pause();
		        //this.currentTime = 0;
		    });
		}
	});

});