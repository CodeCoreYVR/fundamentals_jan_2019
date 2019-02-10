// When any shape is clicked, log to the console
$('.shape').on('click', function() {
	console.log('shape clicked');
});
// When your mouse enters a blue circle, log to the console
$('.blue.circle').on('mouseenter', function() {
	console.log('Blue Circle: Go Away!');
});
// When your mouse leaves a blue circle, log to the console
$('.blue.circle').on('mouseleave', function() {
	console.log('Blue Circle: Goodbye!');
});
// When you mouse enters a "tr", set its class to highlight
$('tr').on('mouseenter', function() {
	$(this).attr('class', 'highlight');
});
// When your mouse leaves any "tr", set its class to ""
$('tr').on('mouseleave', function() {
	$(this).attr('class', '');
});
