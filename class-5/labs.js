// Personable Persons
/*
Create two person objects with an "age" attribute and a "name" attribute. 
Then, add a "greet" method to both people. The method should accept a 
person as a parameter and outputs the following:

"Hello, [name1]. I am [name2]. Pleased to meet you." 
if person1 is older than person2.

"Yo [name2]. I'm totally [name1]. Wsup!." 
if person2 is older than person1.
*/

const youngOne = {
	name: 'Home Skillet',
	age: 13,
	// The method written here was copy and pasted into the object below.
	// They are identical so I will only comment this one
	greet(person) {
		// person is going to be an object that this method is given
		// when it is called
		// this person object will have name and age properties
		if (person.age > this.age) {
			// the `this` keyword within youngOne's greet method
			// will refer to the object `youngOne`
			console.log(
				`Suh Homie! You're ${person.name}. I be called ${this.name}.`,
			);
		} else {
			console.log(
				`Oh Hello ${person.name}. You can call me Mr. ${
					this.name
				}. I am pleased to meet you`,
			);
		}
	},
};

const oldYeller = {
	name: 'Melvin',
	age: 102,
	greet(person) {
		// While the this keyword inside of oldYellers greet method
		// will refer to oldYeller, not to youngOne!
		if (person.age > this.age) {
			console.log(
				`Suh Homie! You're ${person.name}. I be called ${this.name}.`,
			);
		} else {
			console.log(
				`Oh Hello ${person.name}. You can call me Mr. ${
					this.name
				}. I am pleased to meet you`,
			);
		}
	},
};
youngOne.greet(oldYeller);
oldYeller.greet(youngOne);

// Higher Order Functions
/*
Write a function named "callTwo" which takes a number and two functions as parameters, 
and returns the result of calling the two functions on the number.

const doubleIt = function (x) {
 return 2 * x;
}

const addOne = function(x) {
  return x + 1;
}

// Write a function so you can use:
callTwo(5, doubleIt, addOne); // => 11
*/
const doubleIt = function(x) {
	return 2 * x;
};

const addOne = function(x) {
	return x + 1;
};

function callTwo(num, func1, func2) {
	const temp = func1(num);
	return func2(temp);
	// return func2(func1(num));
}

callTwo(5, doubleIt, addOne); // => 11
callTwo(5, addOne, doubleIt); // => 12
callTwo(7, doubleIt, doubleIt); // => 28
