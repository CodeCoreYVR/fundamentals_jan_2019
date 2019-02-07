function runThree(func) {
	func();
	func();
	func();
}

function sayHello() {
	console.log('Hello');
}

function sayBye() {
	console.log('Bye');
}

// `runThree` will call the `sayHello` function 3 times
runThree(sayHello);
// `runThree` will call the `sayBye` function 3 times
runThree(sayBye);
// But if you give `runThree` an argument that is not a function
// it will still try to call it as a function
// which will result in an error
// runThree('string');

// This is bad. We do not want to call the function as we are passing it
// to runThree
// runThree(sayHello());

// const retVal = sayHello();
// retVal === undefined;
// runThree(retVal);

// runThree(undefined);
