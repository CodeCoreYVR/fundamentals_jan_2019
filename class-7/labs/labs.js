// Wiki Hacker

// Write some jQuery to change the title of the article to Your Name.
$('#firstHeading').html('Max Gordon');
// Write some jQuery to hide the body of the article
$('#bodyContent').hide();
// Write some jQuery to remove the wikipedia logo
$('#p-logo').remove();
// Write some jQuery to change the image on the right hand side to a different picture
$('table.biography img').attr(
	'src',
	'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
);

// Craigslist Hacker

// Write some jQuery to get the HREF attribute of the first link on the page
$('a').attr('href');
// Write some jQuery to get the number of links on this page
$('a').length;
// Write some jQuery to change the text for all links to be [Your Name]
$('a').html('Max Gordon');
// Write some jQuery to make Craigslist's logo link to http://www.google.com
$('#logo a')
	.eq(0)
	.attr('href', 'http://www.google.com');
