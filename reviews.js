// Add the click function for the go button
$('.go').click(function(){
	// Get the place ID value
	var appid = $('#appid').val();
	if (appid == ''){
		// Alert if field is blank, else continue
		alert('You didn\'t enter an App ID!!');
	} else {
		// Call my API
		$.getJSON("https://www.reviewsmaker.com/api/public/playstore/?appid=" + appid, function (data){
			// Iterate through the results for this demo and display them on the page
			$.each( data.reviews, function( key, value ) {
			  $('.results').append('<b>Review Author: </b>' + value.author + "<br>");
			  $('.results').append('<b>Review Author Photo: </b>' + value.authorPhoto + "<br>");
			  $('.results').append('<b>Review Date: </b>' + value.date + "<br>");
			  $('.results').append('<b>Review Rating: </b>' + value.rating + "<br>");
			  $('.results').append('<b>Review Text: </b>' + value.reviewText + "<hr>");
			});
			// Display JSON feed in our input for the demo
			var json = JSON.stringify(data);
			$("#jsonresults").val(json);
		});
	}
});