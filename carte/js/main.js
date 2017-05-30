jQuery(document).ready(function($) 
{



	var $ligne = $('#ligne'),
		$doigt = $('#doigt'),
		tlClic;

	tlClic =  new TimelineMax({ repeat: -1});

	tlClic
		.set([$ligne], {autoAlpha: 0}) 
		//.set([$doigt], {yPercent: '-20'});
		.to($ligne, 0.8, {autoAlpha: 1, ease:Linear.easeNone})
		.to($ligne, 0.8, {autoAlpha: 0, ease:Linear.easeNone});















	var data = $.getJSON( "json/data.json", function(response) {
	  	console.log( "success" );
	  	displayItems(response);

	  	



		var source   = $("#detail-template").html();
		var template = Handlebars.compile(source);

		$(".detail-toggle").click(function(){
			$('.clic-clic').fadeOut();
			var terrorId = $(this).data('terrorid'),
				terrorObject;
			$.each(response, function(key, item){
				if(item.terrorId == terrorId) {
					terrorObject = item;
					return;
				}
			});
			
			
			var html    = template(terrorObject);
			$( ".visualisator" ).html(html);
			
		});


		$(".detail-toggle").click(function(){
			$('.detail').addClass('is-visible');
			$('.card').removeClass('is-active');
			$(this).addClass('is-active');
		});

		$(".close").click(function(){
			$('.detail').removeClass('is-visible');
			$('.card').removeClass('is-active');
		});

	})

	

	

	$(".map-toggle").click(function(){
		$('.carte').toggleClass('is-visible');
	});

	$(".button").click(function(){
		$('.button').removeClass('is-active');
		$(this).addClass('is-active');
	});

	$(".button").on('click', function(e) {
		$('.button').removeClass('is-active');
		$(this).addClass('is-active');
		// alert('hello');
		// $(".iframe").load('http://theurltoload.com')
		// e.preventDefault();
		e.preventDefault();
		var $el = $(this);
		// alert($el.attr('map-url'));
		$(".iframe").attr("src", $el.attr('map-url'));
	});





	function displayItems(arr) {
		var source   = $("#list-template").html();
		var template = Handlebars.compile(source);

		var html    = template({terrors:arr});
			$( ".card-container" ).html(html);

		// var out = "";
		// var i;
		// for(i = 0; i<arr.length; i++) {
	 //        out += '<div data-terrorId="' + arr[i].terrorId + '" class="card detail-toggle">';
	 //        	out += '<div class="card__header">';
	 //        		out += '<img src="img/' + arr[i].terrorNomImage + '.jpg">';
	 //        	out += '</div>';
	 //        	out += '<div class="card__body">'
		//         	out += '<p>';
		//         		out += '<span>' + arr[i].terrorNom + '</span><br>';
		//         		out += 'Age: ' + arr[i].terrorAge + ' ans<br>';
		//         		out += 'Nationalité: ' + arr[i].terrorNation + '<br>';
		//         		out += 'Implication: ' + arr[i].terrorLieu;
		//         	out += '</p>';
		//         out += '</div>';
	 //        out += '</div>';
	 //    }
	 //    $('.card-container').html(out);
	}

	// var source   = $("#list-template").html();
	// var template = Handlebars.compile(source);

	// var context = {title: "My New Post", body: "This is my first post!"};
	// var html    = template(context);

	// $('.infos').html(html);

});
