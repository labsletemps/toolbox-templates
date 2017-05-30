jQuery(document).ready(function($) 
{

	setTimeout(function() 
	{
		$('.overlay .logo-lt-blanc, .spinner').fadeOut();
		setTimeout(function() 
		{
			$('.overlay').fadeOut();
		}, 500);
	}, 1000);

	$(".open-menu").on('click', function(e) {
		$('aside').addClass('is-open');
		$(this).addClass('is-white');
	});

	$(".close-menu").on('click', function(e) {
		$('aside').removeClass('is-open');
		$('.open-menu').removeClass('is-white');
	});



	var $overlayContent = $('.overlay-content'),
		$aside = $('aside');
	$(".overlay-content .btn").on('click', function(e) {
		//alert('dsdsd');
		$overlayContent.addClass('is-hidden');
		setTimeout(function() 
		{
			$overlayContent.fadeOut();
			$('.content').show(function(){
				$('.content').isotope({ filter: $filterValue });
				setTimeout(function() 
				{
					if($(window).width() > 500)
					{
						$aside.css('-webkit-transform', 'translate(0,0)');
						$aside.css('transform', 'translate(0,0)');
					}
				}, 300);
			});
		}, 300);
	});

	

	var data = $.getJSON( "json/data.json", function(response) {
	  	//console.log( "success" );
	  	displayCards(response);
	  	//console.log(response);

	  	//FAIT LE LIEN ENTRE LE DATA-CARDID ET LE BON GROUPE JSON
	  	var source   = $("#detail-template").html();
		var template = Handlebars.compile(source);
		$(".card").on('click', function(e) {
			// SCROLL TO AN ELEMENT FUNCTION
			var cardId = $(this).data('cardid'),
				cardObject;
			$.each(response.cards, function(key, item){
				if(item.cardId == cardId) {
					cardObject = item;
					return;
				}
			});
			var html    = template(cardObject);
			$( ".visualisator" ).html(html);
			//alert(cardId);
			
		});

		
	})


	function displayCards(arr) {
		var source = $("#card-template").html();
		var template = Handlebars.compile(source);

		var html = template({cards:arr.cards});
			$( ".content" ).html(html);



		var reader = $('.reader'),
			content = $('.content');
		var visualisator = $('.visualisator');
		$(".card").not('.na').on('click', function(e) {
			$('html, body').animate({
		       scrollTop:$('.content').offset().top
		    }, 300);

		    $('.open-menu').css('display', 'none');
			
			content.fadeOut();
			reader.css('display', 'block');
			setTimeout(function() 
			{
				reader.addClass('is-visible');
			}, 10);
			
			reader.prepend('<svg class="close-article" version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="81px" height="81px" viewBox="0 0 81 81" enable-background="new 0 0 81 81" xml:space="preserve"><rect class="bg" fill="#D4D926" width="81" height="81"/><rect class="cross" x="14.551" y="39.344" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -16.7757 40.5)" fill="#FFFFFF" width="51.898" height="2.312"/><rect class="cross" x="14.551" y="39.344" transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 40.5 97.7757)" fill="#FFFFFF" width="51.898" height="2.312"/></svg>');
			$(".close-article").click(function(){
				if($(window).width() < 500)
				{
					$('.open-menu').css('display', 'block');
				}
				visualisator.css("opacity", "0");
				setTimeout(function() 
				{
					visualisator.html(' ');
					reader.removeClass('is-visible');
					setTimeout(function() 
					{
						reader.css('display', 'none');
						content.fadeIn(function(){
							$('.content').isotope({ filter: $filterValue });
						});
					}, 300);
				}, 300);

			});


			setTimeout(function() 
			{
				visualisator.css("opacity", "1");
				$(".visualisator-body .btn").click(function(){
				    $(".close-article").trigger("click");
				});
			}, 300);

			// setTimeout(function() 
			// {
			// 	$('.reader, .visualisator').animate({
			// 		scrollTop:$('h1').offset().top
			// 	}, 1500);

			// }, 1000);
		});


		


		$(window).load(function(){ 
			$('.content').isotope({
			  // options
			  itemSelector: '.card'
			});
		}, function(){
			content.hide();
		});


		

	}
	
	



















	
	

	var filters = {};
	
	// flatten object by concatting values
	function concatValues( obj ) {
	  var value = '';
	  for ( var prop in obj ) {
	  	if (obj[ prop ]) {
	    	value += obj[ prop ];
	    }
	  }
	  return value;
	}

	$( "#amount" ).html('Tous');
	$( "#slider-range-max" ).slider({
      range: "max",
      min: 1,
      max: 7,
      value: 1,
      slide: function( event, ui ) {
      	switch (ui.value) { 
			case 1: 
				$( "#amount" ).html('Tous');
				$('.filter1-btn-grp .btn').removeClass('is-active');
				$('.filter1').find('h4 span').hide();
				filters['filter1-btn-grp'] = undefined;
				$filterValue = concatValues( filters );
				$('.content').isotope({ filter: $filterValue });
				break;
			case 2:
				$( "#amount" ).html('Gauche du PS');
				$('.filter1-btn-grp .btn').addClass('is-active');
				$('.filter1').find('h4 span').show();
				var filter = '.f-gauche-du-ps';
				filters['filter1-btn-grp'] = filter;
				$filterValue = concatValues( filters );
				$('.content').isotope({ filter: $filterValue });
				break;
			case 3:
				$( "#amount" ).html('Parti socialiste');
				$('.filter1-btn-grp .btn').addClass('is-active');
				$('.filter1').find('h4 span').show();
				var filter = '.f-ps';
				filters['filter1-btn-grp'] = filter;
				$filterValue = concatValues( filters );
				$('.content').isotope({ filter: $filterValue });
				break;		
			case 4: 
				$( "#amount" ).html('Centre');
				$('.filter1-btn-grp .btn').addClass('is-active');
				$('.filter1').find('h4 span').show();
				var filter = '.f-centre';
				filters['filter1-btn-grp'] = filter;
				$filterValue = concatValues( filters );
				$('.content').isotope({ filter: $filterValue });
				break;
			case 5: 
				$( "#amount" ).html('Les Républicains');
				$('.filter1-btn-grp .btn').addClass('is-active');
				$('.filter1').find('h4 span').show();
				var filter = '.f-republicain';
				filters['filter1-btn-grp'] = filter;
				$filterValue = concatValues( filters );
				$('.content').isotope({ filter: $filterValue });
				break;
			case 6: 
				$( "#amount" ).html('Front national');
				$('.filter1-btn-grp .btn').addClass('is-active');
				$('.filter1').find('h4 span').show();
				var filter = '.f-fn';
				filters['filter1-btn-grp'] = filter;
				$filterValue = concatValues( filters );
				$('.content').isotope({ filter: $filterValue });
				break;
			case 7:
				$( "#amount" ).html('Autres');
				$('.filter1-btn-grp .btn').addClass('is-active');
				$('.filter1').find('h4 span').show();
				var filter = '.f-autres';
				filters['filter1-btn-grp'] = filter;
				$filterValue = concatValues( filters );
				$('.content').isotope({ filter: $filterValue });
		}
        //$( "#amount" ).html( ui.value );
        //alert(ui.value);
      }
    });
    //$( "#amount" ).html( $( "#slider-range-max" ).slider( "value" ) );
    

    $(".filter1 h4 span").on('click', function(e) {
		$(this).parent().parent().find('.btn').removeClass('is-active');
		$(this).hide();
		$( "#slider-range-max" ).slider( "value", 1 );
		$( "#amount" ).html('Tous');
		filters['filter1-btn-grp'] = undefined;
		$filterValue = concatValues( filters );
		$('.content').isotope({ filter: $filterValue });
	});

	

	var $filterValue;
	// $(".filter1-btn-grp .btn").on('click', function(e) {
	// 	$(".filter1-btn-grp .btn").removeClass('is-active');
	// 	$(this).addClass('is-active');
	// 	$(this).parent().parent().find('span').show();
	// 	var filter = $(this).attr('data-filter');
	// 	filters['filter1-btn-grp'] = filter;
	// 	$filterValue = concatValues( filters );
	// 	$('.content').isotope({ filter: $filterValue });
	// });

	// $(".filter1 h4 span").on('click', function(e) {
	// 	$(this).parent().parent().find('.btn').removeClass('is-active');
	// 	$(this).hide();
	// 	filters['filter1-btn-grp'] = undefined;
	// 	$filterValue = concatValues( filters );
	// 	$('.content').isotope({ filter: $filterValue });
	// });

	$(".filter2-btn-grp .btn").on('click', function(e) {
		$(".filter2-btn-grp .btn").removeClass('is-active');
		$(this).addClass('is-active');
		$(this).parent().parent().find('span').show();
		var filter = $(this).attr('data-filter');
		filters['filter2-btn-grp'] = filter;
		$filterValue = concatValues( filters );
		$('.content').isotope({ filter: $filterValue });
	});

	$(".filter2 h4 span").on('click', function(e) {
		$(this).parent().parent().find('.btn').removeClass('is-active');
		$(this).hide();
		filters['filter2-btn-grp'] = undefined;
		$filterValue = concatValues( filters );
		$('.content').isotope({ filter: $filterValue });
	});

	$(".filter3-btn-grp .btn").on('click', function(e) {
		$(".filter3-btn-grp .btn").removeClass('is-active');
		$(this).addClass('is-active');
		$(this).parent().parent().find('span').show();
		var filter = $(this).attr('data-filter');
		filters['filter3-btn-grp'] = filter;
		$filterValue = concatValues( filters );
		$('.content').isotope({ filter: $filterValue });
	});

	$(".filter3 h4 span").on('click', function(e) {
		$(this).parent().parent().find('.btn').removeClass('is-active');
		$(this).hide();
		filters['filter3-btn-grp'] = undefined;
		$filterValue = concatValues( filters );
		$('.content').isotope({ filter: $filterValue });
	});

	$(".filter4-btn-grp .btn").on('click', function(e) {
		$(".filter4-btn-grp .btn").removeClass('is-active');
		$(this).addClass('is-active');
		$(this).parent().parent().find('span').show();
		var filter = $(this).attr('data-filter');
		filters['filter4-btn-grp'] = filter;
		$filterValue = concatValues( filters );
		$('.content').isotope({ filter: $filterValue });
	});

	$(".filter4 h4 span").on('click', function(e) {
		$(this).parent().parent().find('.btn').removeClass('is-active');
		$(this).hide();
		filters['filter4-btn-grp'] = undefined;
		$filterValue = concatValues( filters );
		$('.content').isotope({ filter: $filterValue });
	});

	$(".filter5-btn-grp .btn").on('click', function(e) {
		$(".filter5-btn-grp .btn").removeClass('is-active');
		$(this).addClass('is-active');
		$(this).parent().parent().find('span').show();
		var filter = $(this).attr('data-filter');
		filters['filter5-btn-grp'] = filter;
		$filterValue = concatValues( filters );
		$('.content').isotope({ filter: $filterValue });
	});

	$(".filter5 h4 span").on('click', function(e) {
		$(this).parent().parent().find('.btn').removeClass('is-active');
		$(this).hide();
		filters['filter5-btn-grp'] = undefined;
		$filterValue = concatValues( filters );
		$('.content').isotope({ filter: $filterValue });
	});

	$(".filter6-btn-grp .btn").on('click', function(e) {
		$(".filter6-btn-grp .btn").removeClass('is-active');
		$(this).addClass('is-active');
		$(this).parent().parent().find('span').show();
		var filter = $(this).attr('data-filter');
		filters['filter6-btn-grp'] = filter;
		$filterValue = concatValues( filters );
		$('.content').isotope({ filter: $filterValue });
	});

	$(".filter6 h4 span").on('click', function(e) {
		$(this).parent().parent().find('.btn').removeClass('is-active');
		$(this).hide();
		filters['filter6-btn-grp'] = undefined;
		$filterValue = concatValues( filters );
		$('.content').isotope({ filter: $filterValue });
	});











	// THIS IS EXECUTED WHEN EVERYTHING IS LOADED
	// var everythingLoaded = setInterval(function() {
	//   if (/loaded|complete/.test(document.readyState)) {
	//     clearInterval(everythingLoaded);
	//   }
	// }, 10);

	// USE THIS IF SOMETHING CANT LOAD CORRECTLY
	// $(window).load(function(){
	// });

	// THIS IS DONE AT EVERY SCROLL
	// $(window).scroll(function (event) {
 //    });

    // SCROLL TO AN ELEMENT FUNCTION
    //$('html, body').animate({
    //    scrollTop:$('.element').offset().top
    //}, 1000);

    // SCROLL TO A CALCULATED HEIGHT
	//$('html, body').animate({
    //      scrollTop:$(scrollHeight).offset().top
    //}, 1000);

    // SIMPLE CLICK
 //    $(".menu").click(function(){
	// });
	
    // SET A DELAY IN A FUNCTION
	// setTimeout(function() 
	// {
	// }, 250);

	// KEEP A DIV SQUARE HACK
	// var largeur = $('.un-quart').width();
	// $('.un-quart').height(largeur);

 //   	$(window).resize(function(){
 //   		var largeur = $('.un-quart').width();
 //   		$('.un-quart').height(largeur);
 //    });

   	// THIS IS EXECUTED ON RESIZE
   	// $(window).resize(function(){

    // });

   	// THIS IS EXECUTED DEPENDING ON WINDOW WIDTH
	// if($(window).width() > 500)
	// {
	// }

});
