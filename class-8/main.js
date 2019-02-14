console.log('This is main.js');
$(document).ready(function() {
	// Find all links
	// update the href attribute of all links
	// to wikipedia.com
	$('a').attr('href', 'http://wikipedia.com');
	// Actually, lets set the href attribute for the
	// second link to be reddit.com
	$('a')
		.eq(1)
		.attr('href', 'http://reddit.com');

	// We did not need to specify 'button'
	// since all ids should be unique
	// so that '#close' should uniquely identify the specific
	// button on its own
	$('button#close').on('click', function() {
		// $('p#text').hide();
		$('#text').slideUp(3000);
	});

	$('button#open').on('click', function() {
		// $('p#text').show();
		$('#text').slideDown(500);
	});
});
