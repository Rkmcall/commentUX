$(document).ready(function(){
	// DOT HOVER ANIMATION

	var open = false; // indicates whether card is open or closed. False = closed

	//Rollover events
	$('.actionZone').mouseover(function() {
	    $('.blueDots').addClass("fadeIn");
	    $('.grayDots').removeClass("fadeIn");
	});

	$('.actionZone').mouseout(function() {
	   $('.blueDots').removeClass("fadeIn");
	   $('.grayDots').addClass("fadeIn");
	});


	//CLICK EVENTS - DROP DOWN
	$('.actionZone').click(function() {
		// ADD IF/ELSE STATEMENT HERE - IF OPEN CLOSE, ELSE OPEN
		//open = true;
		if (open === false) {
			open = true;
			$('.blueDots').addClass("rotate");
	    	$(".grayDots").removeClass("fadeIn");
			//$('.blueDots').addClass("fadeIn");
			$('.expandedCommentWrapper').slideDown(500, "easeOutBack", function() {
				$('.expandedComment').animate({ left: "0px" }, 300);
				$('.grayDots').addClass("rotateGray").addClass("fadeIn");
				});

			} else {
				open = false;
				$('.blueDots').removeClass("rotate");
				$('.grayDots').addClass("fadeIn");
				$('.grayDots').removeClass("rotateGray");
				$('.expandedCommentWrapper').slideUp(400, "easeInSine", function() {
				$('.expandedComment').css( "left", "-320px" );
				});
			}
	});



});