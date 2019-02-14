// This will add a task to the page
function addTaskToUI(task) {
	// console.log(task);
	// the append jQuery method will add the html-like string
	// to the end of all elements that match the query
	// in this case, since we are using an id, this will only match with one element
	// The originally empty div that represents our task-list
	// that was written in the index.html file
	const content = `
        <div class="list-group-item list-group-item-action">
            <div class="d-flex flex-row justify-content-between align-items-center">
                <h5 class="mb-0">${task}</h5>
                <small>
                    <a class="edit-link">Edit</a> |
                    <a class="delete-link">Delete</a>
                </small>
            </div>
        </div>
    `;

	const interpolatedString = `The answer to 2 + 2 is ${2 + 2}`;
	// const errorString = "<div class="This is wrong"></div>"
	$('#task-list').append(content);
}

$(document).ready(function() {
	console.log('The page has loaded');
	$('form#new-task-form').on('submit', function(event) {
		event.preventDefault(); // This prevents the page from reloading
		// event.preventDefault() prevents the event from executing
		// its "normal" action
		// In this case, for a form, that is submitting that form
		// to a server
		// Since we do not have a server, and want to use jQuery to change the page
		// we want to prevent the form from actually being submitted
		// console.log(event);
		// The event object given as an argument to this call back function
		// represents everything associated with submitting a form
		// console.log('submitted');
		// This gets the value from the input field at the time the form was submitted
		const newTask = $('input#new-task')
			.val()
			.trim();
		if (newTask.length > 0) {
			addTaskToUI(newTask); // When called, will add the task to the page
			// This clears the input field so that it is empty and fresh and ready
			// for the next task to be entered
			$('input#new-task').val('');
		}
	});

	// Delete a specific element
	// When the page first loads, we have no tasks
	// So there are no elements with the class "delete-link" on our page
	// So if we try to select all .delete-link when the page loads
	// maybe to add a click handler to them, it will NOT work
	// since they do not yet exist
	console.log('delete-link', $('.delete-link')); // <- there are no .delete-link elements
	// So address this, we need to create what is called a "Delegated Click Handler"
	// or make use of what is more generally called "Event Delegation"
	// To do this, we use the following syntax
	/*
        $(<some parent element>).on(<event-name>, <selector for child that does not yet exist>, function() {
            ....
        });
    */
	// This is a delegated click handler that is attached to the #task-list
	// When someone clicks the task list, it checks to see if what was just clicked
	// was an element with the class 'delete-link'
	// if it was, execute the callback function
	$('#task-list').on('click', '.delete-link', function() {
		console.log('delete was just clicked');
		// console.log(this); // <-- `this` refers to the delete link element
		$(this)
			.closest('.list-group-item')
			.remove();
		// $(this).parent().parent().parent().remove();
	});

	$('#clear-all').on('click', function() {
		$('#task-list')
			.children()
			.remove();
	});

	// This is an example showing keydown events within an input field
	// the 'event' object passed to the callback function
	// represents everything associated with that keydown event
	// other keyboard events include: "keypress", "keyup", etc
	$('input#new-task').on('keydown', function(event) {
		// we use event.key to determine which key was actually pressed
		// that triggered this event
		if (event.key === 'Shift') {
			console.log('You pressed Shift');
		}
	});
});
