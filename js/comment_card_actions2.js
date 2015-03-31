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

	$('.sbp').tooltip({
		content: "<p><h6>Tags:</h6>Cleanliness<br />Facilities</p>",
		position: { my: "center", at: "right top-18", collision: "flipfit" }
	});


	//CLICK EVENTS - DROP DOWN
	$('.actionZone').click(function() {
		// ADD IF/ELSE STATEMENT HERE - IF OPEN CLOSE, ELSE OPEN
		//open = true;
		if (open === false) {  // if closed do the following
			open = true;
			$('.blueDots').addClass("rotate");
	    	$(".grayDots").addClass("rotateGray");


			$('.comment').html("<p>\"... lorem ipsum dolor sit amet, <span title=\"test\" class=\"sbp\">consectetur adipiscing elit</span> Pellentesque porta amet, onsectetur adipiscing elit Pellentesque porta amet, onsectetur adipiscing elit Pellentesque porta amet, onsectetur adipiscing elit Pellentesque porta amet, onsectetur adipiscing elit Pellentesque porta ...\"</p>");
			//$('.blueDots').addClass("fadeIn");

			} else {  // if open do this
				open = false;
				$('.blueDots').removeClass("rotate").addClass("fadeIn");
				$('.grayDots').removeClass("rotateGray").css("display", "hidden");
				$('.comment').html("<p>\"... lorem ipsum dolor sit amet, <span title=\"test\" class=\"sbp\">consectetur adipiscing elit</span>. Pellentesque porta ...\"</p>").fadeIn("slow");
			}
	});



});