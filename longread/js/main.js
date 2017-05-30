jQuery(document).ready(function($) 
{
	// INITIALISATION DU SLIDER
	// $('.bxslider').bxSlider({
	// 	//mode: 'fade'
	// });
	$(".owl").owlCarousel({
	    items : 1,
	    itemsDesktop: [1200,1],
	    itemsTablet: [992,1],
	    itemsMobile: [500,1],
	    lazyLoad : true,
	    navigation : true
	 }); 

	// LAZYLOADING DES IMAGES AVEC LA CLASSE "LAZY"
	$("img.lazy").lazyload({
	    effect : "fadeIn"
	});

	// ZOOM SUR LES IMAGES DISPOSANT DE LA CLASSE ZOOM
	if ($(window).width() > 1200 )
	{
		$(".zoom").click(function() 
		{
			zoom.to({
				element: $(this)[0]
			});
		});
	} 	

	// SCROLL WHEN CLICK ON SCROLL INDICATOR
	$(".scroll-indicator").click(function(){
		$('html, body').animate({
		   scrollTop:$('section:eq(0)').offset().top -80
		}, 1000);
	});


	var $numbers = $('.numbers'),
		numbersDone = false;
	

	$(window).scroll(function(){
    	if ( $numbers.is(':in-viewport') && numbersDone ==false) {
		  	$('.numbers h1 i').counterUp({
				delay: 10, // the delay time in ms
				time: 3000 // the speed time in ms
			});
			numbersDone = true;
		}
		
	});




	// CHART CONFIG
	Chart.defaults.groupableBar = Chart.helpers.clone(Chart.defaults.bar);

	var helpers = Chart.helpers;
	Chart.controllers.groupableBar = Chart.controllers.bar.extend({
	  calculateBarX: function (index, datasetIndex) {
	    // position the bars based on the stack index
	    var stackIndex = this.getMeta().stackIndex;
	    return Chart.controllers.bar.prototype.calculateBarX.apply(this, [index, stackIndex]);
	  },

	  hideOtherStacks: function (datasetIndex) {
	    var meta = this.getMeta();
	    var stackIndex = meta.stackIndex;

	    this.hiddens = [];
	    for (var i = 0; i < datasetIndex; i++) {
	      var dsMeta = this.chart.getDatasetMeta(i);
	      if (dsMeta.stackIndex !== stackIndex) {
	        this.hiddens.push(dsMeta.hidden);
	        dsMeta.hidden = true;
	      }
	    }
	  },

	  unhideOtherStacks: function (datasetIndex) {
	    var meta = this.getMeta();
	    var stackIndex = meta.stackIndex;

	    for (var i = 0; i < datasetIndex; i++) {
	      var dsMeta = this.chart.getDatasetMeta(i);
	      if (dsMeta.stackIndex !== stackIndex) {
	        dsMeta.hidden = this.hiddens.unshift();
	      }
	    }
	  },

	  calculateBarY: function (index, datasetIndex) {
	    this.hideOtherStacks(datasetIndex);
	    var barY = Chart.controllers.bar.prototype.calculateBarY.apply(this, [index, datasetIndex]);
	    this.unhideOtherStacks(datasetIndex);
	    return barY;
	  },

	  calculateBarBase: function (datasetIndex, index) {
	    this.hideOtherStacks(datasetIndex);
	    var barBase = Chart.controllers.bar.prototype.calculateBarBase.apply(this, [datasetIndex, index]);
	    this.unhideOtherStacks(datasetIndex);
	    return barBase;
	  },

	  getBarCount: function () {
	    var stacks = [];

	    // put the stack index in the dataset meta
	    Chart.helpers.each(this.chart.data.datasets, function (dataset, datasetIndex) {
	      var meta = this.chart.getDatasetMeta(datasetIndex);
	      if (meta.bar && this.chart.isDatasetVisible(datasetIndex)) {
	        var stackIndex = stacks.indexOf(dataset.stack);
	        if (stackIndex === -1) {
	          stackIndex = stacks.length;
	          stacks.push(dataset.stack);
	        }
	        meta.stackIndex = stackIndex;
	      }
	    }, this);

	    this.getMeta().stacks = stacks;
	    return stacks.length;
	  },
	});

	var data = {
	  labels: ["2011", "2012", "2013", "2014", "2015"],
	  datasets: [
	    {
	      label: "AQ (Analog Quartz)",
	      backgroundColor: "rgba(99,132,255,0.2)",
	      data: [38.2, 39.7, 39.6, 40.4, 40.1],
	      stack: 1
	    },
	    {
	      label: "DQ (Digital Quartz)",
	      backgroundColor: "rgba(99,255,132,0.2)",
	      data: [17.0, 17.6, 17.9, 17.7, 17.6],
	      stack: 1
	    },
	    {
	      label: "ME (Mechanical Watch)",
	      backgroundColor: "rgba(255,99,132,0.2)",
	      data: [2.7, 2.6, 2.3, 2.2, 1.8],
	      stack: 1
	    }
	  ]
	};

	var data2 = {
	  labels: ["2011", "2012", "2013", "2014", "2015"],
	  datasets: [
	    {
	      label: "AQ (Analog Quartz)",
	      backgroundColor: "rgba(99,132,255,0.2)",
	      data: [75.2, 77.9, 93.6, 107.1, 122.4],
	      stack: 1
	    },
	    {
	      label: "DQ (Digital Quartz)",
	      backgroundColor: "rgba(99,255,132,0.2)",
	      data: [14.3, 15.6, 18.2, 20.1, 21.0],
	      stack: 1
	    },
	    {
	      label: "ME (Mechanical Watch)",
	      backgroundColor: "rgba(255,99,132,0.2)",
	      data: [11.5, 12.3, 13.0, 14.1, 13.9],
	      stack: 1
	    }
	  ]
	};
	
	var graphGenerated = false;
	$(window).scroll(function(){
    	if ($('.gallery .trigger').is(':in-viewport') && graphGenerated == false) {

    		// SET A DELAY IN A FUNCTION
			setTimeout(function() 
			{
				setTimeout(function() 
				{
					$('canvas').addClass('is-visible');
				}, 100);

				var ctx = document.getElementById("myChart").getContext("2d");
				new Chart(ctx, {
				  type: 'groupableBar',
				  data: data,
				  options: {
				  	title: {
			            display: true,
			            text: 'UNITÉS (en millions de pièces)'
			        },
				    scales: {
				      yAxes: [{
				        ticks: {
				          max: 70,
				        },
				        stacked: true,
				      }]
				    }
				  }
				});

				var ctx2 = document.getElementById("myChart2").getContext("2d");
				new Chart(ctx2, {
				  type: 'groupableBar',
				  data: data2,
				  options: {
				  	title: {
			            display: true,
			            text: 'VALEUR (en milliard de Yens)'
			        },
				    scales: {
				      yAxes: [{
				        ticks: {
				          max: 160,
				        },
				        stacked: true,
				      }]
				    }
				  }
				});
			}, 500);

			graphGenerated = true;
		}
	});







});
