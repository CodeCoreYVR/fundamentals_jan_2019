if (true) {
	let ifBlockScopedVar = 'hi';
}
// WE cannot use the `ifBlockScopedVar` variable outside
// of the if-statement's code block
// console.log(ifBlockScopedVar);

for (let i = 0; i < 10; i++) {
	// the variable `i` is scoped to this for loop
	console.log(i);
	if (i % 2 === 0) {
		// Since `i` is defined within the for loop
		// it is available to all child-blocks conatined within
		// the for-loop
		console.log(`${i} is even`);
	}
}
// since `i` is declared within the for loop
// it cannot be used outsie
// console.log(i);

// GLOBAL VARIABLES - DO NOT USE THEM!!

// without using the let and const, we declare a global variable
// Please NEVER DO THIS!
function aFunction() {
	globalVar = 'global';
}
function two() {
	globalVar = 'Is this local?';
}
two();
aFunction();
globalVar;

//   SHADOWING

for (let i = 0; i < 10; i++) {
	console.log('i:', i);
	if (true) {
		// This is a different varaible from the one defined in the for loop
		// but because it has the same name as the i within the parent block
		// it makes it so that the parent-i is no longer visible
		let i = 'Max';
		console.log('i in if:', i);
	}
}
