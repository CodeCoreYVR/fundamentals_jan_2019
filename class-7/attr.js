// Get the "href" attribute of the first link
$('a').attr('href');
$('a')
	.eq(0)
	.attr('href');

// Set the "href" attribute of all links to codecore.ca
$('a').attr('href', 'http://codecore.ca');

// Set the "class" attribute of all links to "highlight"
$('a').attr('class', 'highlight');

// Set the "class" attributes of all shapes to "highlight"
$('.shape').attr('class', 'highlight'); //<-- this overwrites all previous classes
