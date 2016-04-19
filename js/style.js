jQuery(document).ready(function(){

	calculateStickiesInRow();	


	jQuery("#openReadyForTesting").click(function() {
  		jQuery("#readyForTesting, #wrapper").toggleClass("open");
	});

	jQuery("#openFindings").click(function() {
  		jQuery("#findings, #wrapper").toggleClass("open");
	});

	jQuery(".stickyWrapper").click(function() {
		jQuery(".stickyWrapper.clicked").removeClass("clicked");
		jQuery(this).toggleClass("clicked");
	});


 	jQuery("html").click(function () {
        jQuery(".clicked").removeClass("clicked");
    });

	jQuery(".stickyWrapper").click(function (event) {
        event.stopPropagation();
    });
		
 });



jQuery(window).resize(function() {
	calculateStickiesInRow();

});

function calculateStickiesInRow() {
	jQuery(".firstInRow").removeClass("firstInRow");
	    jQuery('div .sticky').each(function() {

        	if ( jQuery(this).prev().length > 0 ) {					

	            if( jQuery(this).offset().top != jQuery(this).prev().offset().top ) {
					jQuery(this).addClass("firstInRow");   
	            }
	    	}
	    	else {
				jQuery(this).addClass("firstInRow");
	    	}

	});
}

