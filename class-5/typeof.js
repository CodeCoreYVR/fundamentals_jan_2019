typeof 5; // => "number"
typeof 'Max'; // => "string"
typeof true; // "boolean"
typeof 4.45; // "number"
typeof [3, 4, 5]; // "object"
const arr = [3, 4, 5];
const obj = { a: 1, b: 2, c: 3 };
obj['a'];
arr[0];
// Under the surface, arrays are just objects
// They are a special kind of object whose keys
// are numbers representing indices
typeof { a: 1, b: 2, c: 3 };
// This also works with variables we have already defined
typeof obj; // "object"
typeof Infinity; // "number"
function aFunction() {
	return 5;
}
typeof aFunction; // "function"

function printType(aVar) {
	console.log(`${aVar} typeof => ${typeof aVar}`);
}
printType(5);
printType('hello world');

function stringOrNumber(aVar) {
	if (typeof aVar === 'number') {
		return aVar + 1;
	}
	if (typeof aVar === 'string') {
		console.log('Hello ' + aVar);
	}
}
stringOrNumber(5);
stringOrNumber('Max');

// Not related to typeof
// However this will show the difference between
// and if-else if statment
// and two ifs one after the other
// In the two ifs case, both if statements will
// execute
// Whereas in the the if-else if case
// only the first if statement that evaluates
// to true will be executed
if (true) {
	console.log('This will print');
} else if (true) {
	console.log('This will NEVER print');
}

if (true) {
	console.log('This will print 1');
}
if (true) {
	console.log('This will also print 2');
}
