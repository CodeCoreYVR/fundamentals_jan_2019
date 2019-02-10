// Select all shapes inthe purple container using "children"
$('#purple-container').children();
// Select the green container using "parent"
$('#green-container .shape').parent();
$('.medium.red.diamond').parent(); // <- since there is only one medium red diamond
// Select all "li" tags that contain a link
$('li a').parent();
