// Part 1
// Select all red shapes inside the orange container
$('#orange-container .shape.red');
// Select all medium or small shapes inside the green container
$('#green-container .shape.small, #green-container .shape.medium');
// Select all shapes inside any container
$('.container .shape');
// Select all link tags
$('a');
// Select all the link tags inside an "li" tag
$('li a');
// Count the number of small blue circles
$('.blue.circle').length;

// Part 2
// When 'button 1' is clicked, remove all shapes.
$('#button-1').on('click', function() {
	$('.shape').remove();
});
// When 'button 2' is clicked, disable button 2. (Set the 'disabled' attribute to true)
$('#button-2').on('click', function() {
	$(this).attr('disabled', true);
});
// When 'button 3' is clicked, set the button message to "Button 3 was clicked"
$('#button-3').on('click', function() {
	$('#button-message').html('Button 3 was clicked');
});

// Part 3
// When any button is clicked, set the button message to "Button [button id] was clicked"
$('button').on('click', function() {
	$('#button-message').html($(this).attr('id'));
});
