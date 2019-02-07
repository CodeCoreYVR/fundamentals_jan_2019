// Also look at runThree.js

// A higher order function takes a function as an argument
// or it returns a function

// Call is a higher order function
// it takes an argumetn `func` which is itself another function
function call(arg, func) {
	// It then calls that function
	// and passes it an argument, `arg`
	// returning the value that that `func` function would have returned
	// if called normally with that same argument
	return func(arg);
}

function doubleIt(num) {
	return 2 * num;
}
call(5, doubleIt);

function addOne(num) {
	return num + 1;
}
call(7, addOne); // => 8

doubleIt(5) === call(5, doubleIt);
addOne(7) === call(7, addOne);

// This is an anonymous function
// Any funciton defined inline and passed immediately to
// another function as an argument is called an
// Anonymous Funciton
// So even though we named the function here `addTwp`
// since it is defined inline as an argument,
// we could not call it using that name
// This is due to scoping!
call(7, function addTwo(num) {
	return num + 2;
}) === 8;

// This would not work!
// addTwo(4)
