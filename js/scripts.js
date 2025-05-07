(function($){
	$(document).ready(function() {



	//slider1
	jQuery(document).ready(function() {
	 $(".slider1").owlCarousel({
	 	"items" : 5,
	 	"margin" : 20,
	 	"autoplay": false,	 	
	 	"autoplayTimeout" : 4000,
	 	"loop" : true,
	 	"nav" : false,
	 	"dop" : true,
	 	"responsive" : {
	 		0 : {
	 			"items" : 1
	 		},
	 		576 : {
	 			"items" : 1
	 		},
	 		767 : {
	 			"items" : 2
	 		},
	 		991 : {
	 		 	"items" : 3
	 		}


	 	}
	 });


	var owl = $('.slider1');
	owl.owlCarousel();
	// Go to the next item
	$('.customNextBtn1').click(function() {
	    owl.trigger('next.owl.carousel');
	})
	// Go to the previous item
	$('.customPrevBtn1').click(function() {
	    // With optional speed parameter
	    // Parameters has to be in square bracket '[]'
	    owl.trigger('prev.owl.carousel', [300]);
	})


	});









	//slider2
	jQuery(document).ready(function() {
	 $(".slider2").owlCarousel({
	 	"items" : 5,
	 	"margin" : 20,
	 	"autoplay": false,	 	
	 	"autoplayTimeout" : 4000,
	 	"loop" : true,
	 	"nav" : false,
	 	"dop" : true,
	 	"responsive" : {
	 		0 : {
	 			"items" : 1
	 		},
	 		576 : {
	 			"items" : 1
	 		},
	 		767 : {
	 			"items" : 1
	 		},
	 		991 : {
	 		 	"items" : 1
	 		}


	 	}
	 });


	var owl = $('.slider2');
	owl.owlCarousel();
	// Go to the next item
	$('.customNextBtn2').click(function() {
	    owl.trigger('next.owl.carousel');
	})
	// Go to the previous item
	$('.customPrevBtn2').click(function() {
	    // With optional speed parameter
	    // Parameters has to be in square bracket '[]'
	    owl.trigger('prev.owl.carousel', [300]);
	})


	});








    //slider3
	jQuery(document).ready(function() {
	 $(".slider3").owlCarousel({
	 	"items" : 5,
	 	"margin" : 15,
	 	"autoplay": false,	 	
	 	"autoplayTimeout" : 4000,
	 	"loop" : true,
	 	"nav" : false,
	 	"dop" : true,
	 	"responsive" : {
	 		0 : {
	 			"items" : 1
	 		},
	 		576 : {
	 			"items" : 1
	 		},
	 		767 : {
	 			"items" : 3
	 		},
	 		991 : {
	 		 	"items" : 4
	 		}


	 	}
	 });


	var owl = $('.slider3');
	owl.owlCarousel();
	// Go to the next item
	$('.customNextBtn3').click(function() {
	    owl.trigger('next.owl.carousel');
	})
	// Go to the previous item
	$('.customPrevBtn3').click(function() {
	    // With optional speed parameter
	    // Parameters has to be in square bracket '[]'
	    owl.trigger('prev.owl.carousel', [300]);
	})


	});




	//menupart
	jQuery(".menuicon1").click(function() {
      jQuery(".closeicon").show();
	});

	jQuery(".menuicon1").click(function() {
      jQuery(".menuicon1").hide();
	});


	jQuery(".closeicon").click(function() {
      jQuery(".menuicon1").show();
	});

	jQuery(".closeicon").click(function() {
      jQuery(".closeicon").hide();
	});


	jQuery(".menupart img").click(function() {
      jQuery(".nav-area").slideToggle();
	});




		
	
	});
})(jQuery);