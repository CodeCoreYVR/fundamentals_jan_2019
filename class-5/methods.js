// This is NOT a method, even though it gets assigned to the value
// of a method below.
// It still remains a regular function
function increment(num) {
	return num + 1;
}
const myIncrementVarFn = increment;

increment(3); // => 4
myIncrementVarFn(3); // => 4

const myString1 = 'Max';
const myString2 = myString1;

const age = 10;
const myObj = {
	name: 'Max',
	age: age,
	// This is an inline definition of a method that belongs to myObj
	myInlineMethod: function(myArgs) {
		console.log(myArgs);
	},
	// This assigns an existing function to be the value
	// of a property within `myObj` called `myIncrement`
	// This makes `myIncrement` a method of `myObj`
	// Howeverm `increment` is still just a plain function
	myIncrement: increment,
	// This uses syntax sugar to define an inline method
	// When doing this, we can omit the `: function`
	// That being said, this is equivalent to myInlineMethod
	// This syntax sugar can only be used when defining a method
	// as a property of an object
	mySyntaxSugarMethod(myArgs) {
		console.log('myArgs from the syntax sugar', myArgs);
	},
};
// This is calling a method
myObj.myInlineMethod(23); // => 23
myObj.myIncrement(3); // => 4
myObj.mySyntaxSugarMethod(23); // => 23
increment(3); // => 4

/*
isThisAFunction(myArgs) {
    // WE cannot do this
    // We need the function keyword when defining a function
    // outside of a method
}
*/

const car = {
	make: 'Toyota',
	model: 'Prius',
	name: 'Betsy',
	// This syntac sugar can only be used when first creating
	// the object.
	// We cannot use when adding additional methods after creating
	// the object.
	drive() {
		console.log('vroom vroom');
	},
	openTrunk: function() {
		console.log('trunk opened');
	},
};

car.hasAirConditioning = true;
car.closeTrunk = function() {
	console.log('trunk closed');
};

// car.drive();
// car.openTrunk();
// car.closeTrunk();

// This loops over the properties of the car object
for (let property in car) {
	// checks to see if the value of that property is a function
	// i.e. if that property represents a method within the car object
	if (typeof car[property] === 'function') {
		// if it is a method, call that method
		car[property]();
	}
}

const array = [2, 3, 4];
// push is a method of all arrays
array.push(5);
// log is a method of the console object
console.log(array);

const car2 = {
	speed: 100, // This represents a speed in km/h
	park: function() {
		console.log('Parking!');
	},
	stop() {
		return 'Stopping!';
	},
};
car2.park();
car2.stop();
