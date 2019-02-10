// When any shape is clicked, log the value of its class attribute
$('.shape').on('click', function() {
	console.log($(this).attr('class'));
});
// When any shape is clicked, hide it
$('.shape').on('click', function() {
	$(this).hide();
});
// When any shape is clicked, remove its parent container
$('.shape').on('click', function() {
	$(this)
		.parent()
		.remove();
});
// When any container is clicked, remove all the shapes inside it
$('.container').on('click', function() {
	$(this)
		.children()
		.remove();
});
