jQuery(document).ready(function($) 
{


	

	var data = $.getJSON( "json/data.json", function(response) {
	  	console.log( "success" );
	  	displayIntro(response);
	  	displayEntries(response);	
	  	displayCredits(response);
	  	setScrollReveal(response);

	  	

	})

	function setScrollReveal(arr) {
		

		var vFactor = arr.params.vFactor;
		//alert(vFactor);
		window.sr = new scrollReveal({ opacity: 0, vFactor: vFactor });

	}

	function displayIntro(arr) {
		var source   = $("#intro-template").html();
		var template = Handlebars.compile(source);

		var html    = template(arr.intro);
			$( ".intro-container" ).html(html);

		

	}

	function displayEntries(arr) {
		var source   = $("#entry-template").html();
		var template = Handlebars.compile(source);

		var html    = template({entries:arr.entries});
			$( ".cbp_tmtimeline" ).html(html);

		
	}

	function displayCredits(arr) {
		var source   = $("#credits-template").html();
		var template = Handlebars.compile(source);

		var html    = template(arr.credits);
			$( ".credits" ).html(html);


	}

	//$(".video-container").fitVids();

	// THIS IS EXECUTED WHEN EVERYTHING IS LOADED
	var everythingLoaded = setInterval(function() {
	  if (/loaded|complete/.test(document.readyState)) {
	    clearInterval(everythingLoaded);
	    //alert('Hello'); // this is the function that gets called when everything is loaded
	  }
	}, 10);

	// USE THIS IF SOMETHING CANT LOAD CORRECTLY
	$(window).load(function(){
	 });

	// THIS IS DONE AT EVERY SCROLL
	$(window).scroll(function (event) {
    });

    // SCROLL TO AN ELEMENT FUNCTION
    $('html, body').animate({
        scrollTop:$('.element').offset().top
    }, 1000);

    // SCROLL TO A CALCULATED HEIGHT
	$('html, body').animate({
          scrollTop:$(scrollHeight).offset().top
    }, 1000);

    // SIMPLE CLICK
    $(".menu").click(function(){
	});
	
    // SET A DELAY IN A FUNCTION
	setTimeout(function() 
	{
	}, 250);

	// KEEP A DIV SQUARE HACK
	var largeur = $('.un-quart').width();
	$('.un-quart').height(largeur);

   	$(window).resize(function(){
   		var largeur = $('.un-quart').width();
   		$('.un-quart').height(largeur);
    });

   	// THIS IS EXECUTED ON RESIZE
   	$(window).resize(function(){

    });

   	// THIS IS EXECUTED DEPENDING ON WINDOW WIDTH
	if($(window).width() > 500)
	{
	}

});
