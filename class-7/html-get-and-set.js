// Remove all blue shapes
$('.blue.shape').remove();
// Remove all shapes in orange container
$('#orange-container .shape').remove();
// remove all small red circles
$('.small.red.circle').remove();
// get the html contents of the reset button
$('#reset').html();
// try ot get the html contents of all links. what happens?
$('a').html(); // this only reads the contents of the first link
// Change the reset button to read "Launch Missiles!"
$('#reset').html('Launch Missiles!');
// Change all the h1 tags to read "[Your Name] is cool!"
$('h1').html('Max is cool!');
