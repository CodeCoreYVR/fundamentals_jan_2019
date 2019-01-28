// This is a comment

/*
This is
a multiline
comment
*/

const myConstantVar = 1;
let myMutable = "mutable";
var myOtherMutable = "other mutable";

// myConstantVar = 10; // This is an error. You cannot re-assign constants

// Variables defined/declared using the `let` or `var` keywords can be re-assigned
myMutable = "Some other value";
myOtherMutable = "Some other other value";

/* 
Data Types 

number
string
boolean
object
array

NaN
undefined
null

*/

// Numbers
const num1 = 4;
const num2 = 10;
num1 + num2;
num1 - num2;
num1 * num2;
num1 / num2;
// This is the exponential/power syntax
// 4 ** 10 (4 to the power of 10);
num1 ** num2;
Math.pow(num1, num2);
num2 % 4; // return 2
num2 % num1; // 10 % 4 -> return 2

const mySum = num1 + num2;
// const mySum = 4 + num2;
// const mySum = 4 + 10;
// const mySum = 14;
// mySum === 14;

// Strings
const myStr = "this is a double quoted string"; // Single and double quoted strings need to be on one-line
const mySingleStr = 'This uses single quotes';
const backtickedString = `
              this is indented
`;

const concatenatedStr = myStr + " " + mySingleStr;
// 'this is a double quoted string This uses single quotes';
const concatStr2 = "num1 has the value of " + num1;
// We can get values from variables within our JS code
// and use them within a string using string interpolation
const interpolatedStr = `num1 has the value of ${num1}`;
const interpolatedStr2 = `num1 + num2 has the value of ${num1 + num2}`;

const myText = 'And then David said, "This is my quote"';
const myText2 = "And then David said, \"This is my quote\"";
const myText3 = "I will use the backslash \ here";
const myText4 = 'I am quoting \'This is the quote\'';
const myText5 = `I am quoting, "This is a double quoted quote". 'This is a single quoted quote'`;

// Booleans 

const boolean = true;
const boolean2 = false;

2 + 1; // is 3 which is a number data type
2 > 1; // returns boolean value -> true
2 < 1; // returns boolean value -> false

2 == 3; // false
2 === 3; // false

3 == 3; // true
3 === 3; // true

"3" == 3; // true
"3" === 3; // false, a string is not a number!
// The `===` will check the value and the data type
// const myVariable === 3; // <- this does not declare a variable in JS. This is an error
// remember that only a `=` assigns values to variables

// 5 = 5; // This is also an error! You cannot use the `=` to compare values. ONly the `==` or `===`

// WE call the `>`, `<`, `==`, and `===` signs "Comparators"
3 >= 3; // true
3 >= -1; // true
3 <= 3; // true
3 <= -1; // false
// The `<` or `>` must come first when using the `<=` or `>=` comparators

// To compare if two things are NOT equal to each other.
// We use the `!=` or `!==`
4 != 5; // true
4 !== 5; // true

"4" !== 4; // true, the string "4" is not equal to the number 4
"4" != 4; // false, those actually are the same when using the non-strict comparator

4 !== 4; // false
4 != 4; // false

const myBoolean = 4 > 2; // 4 > 2 -> true; // const myBoolean = true;
myBoolean === true;

// Arrays
// Arrays are how we represent lists of items in JavaScript
[1, 3, 5, 7, 9]; // This is a list of numbers, we say that it is an Array of numbers;
// An item in the list is an "element" in our array
const myArr = [1, 3, 5, 7, 9];
// The element at index 0 is 1,
// The element at index 1 is 3,
// The element at index 2 is 5,
// ....
//  0  1  2  3  4
// [1, 3, 5, 7, 9];
// This is how we access the element within `myArr` located at index 1
myArr[1]; // returns 3
// This is how we access the value/element within `myArr` located at index 3
myArr[3]; // returns 7

myArr[5]; // returns undefined
// `undefined` is a keyword in JS
// it represents a value that has not been assigned yet
myArr[5] === undefined; // true
undefined === undefined; // true
true;

// We can assign a value to a specific index with our array, but using the name of the array
// followed by square bracket notation followed by an equal sign and then the value.
// we assign the value of 10 to be the value located at index 2 within  `myArr`;
myArr[2] = 10;
[1, 3, 10, 7, 9];

// myArr[1,2,3]; // <- You will never do this when writing JS! Please do not attempt it!

// myArr = "some other value"; since `myArr` is a constant, it can't be re-assigned
// myArr = [9, 8, 7, 6]; // This also throws an ERROR!

// `push` is a function that adds an element to the end of our array
myArr.push(3);
[1, 3, 10, 7, 9, 3];

const myPoppedVal = myArr.pop();
// myArr -> [1, 3, 10, 7, 9]
myPoppedVal === 3;

myArr.slice(1, 3); // return a subset of the array
// myArr[1,2,3]

// Functions
// To declare a function we being by using the `function` keyword
// followed by the name of the function (in this case I've named it `myFn`)
// Followed by our arguments list.
// Next, open a code-block
// A code-block is any code written between `{` `}` * The one case where this isn't true is when defining an object
// If we want our function to return a value, we use the `return` keyword
function myFn(input1, input2) {
  return input1 + input2;
}
// To use a function, we type the function name, followed by round bracks `()`
// Within those round brackets, we will incldue any parameters or arguments or inputs
// that the function requires
// When we use a function using the round brackets, we say that we `call` the function
myFn(3, 4); // This returns the value 7
// Since this returns a value, I can assign that value to a variable

function add(num1, num2) {
  return num1 + num2;
}

const sum = add(3, 4);
// sum === 7;
sum > 5;
7 > 5;
true;

// Any function that does not use the `return` keyword implicitly returns the JS special value
// of `undefined`
function otherFn() {
  // ...
  console.log("otherFn has just been called");
}
const ret = otherFn();
ret === undefined;
ret > 5;
undefined > 5;
false;

function subtract(num1, num2) {
  return num1 - num2;
} 

const result = subtract(5, 2);
// const result = 3;
// result === 3;

// Back to Arrays....
// When joining arrays, or strings, we use the term "Concatenation". The short from is "Concat";
// This just means to join together.
const arr1 = [1,2,3];
const arr2 = [4,5,6];
// This is how we joins arrays
const arr3 = arr1.concat(arr2); 
// arr3 === [1,2,3,4,5,6];

// Here we have an array whose values are of different data types
// We have an array conatined within an array
// This is called a nested array
const arr4 = [1, "friends", true, [10, 30, false]];
const arr5 = [1, "friends", true, arr2];

// Objects
// we can use objects to represent complex data
const obj = {
  propertyName: "value",
  propertyName2: 10,
}; // This is called the `object literal` syntax
obj.propertyName === "value";
obj.propertyName2 === 10;

obj["propertyName"] === "value";

const person = {
  name: "Max",
  age: 26,
  gender: "M",
  knowsJavaScript: true,
  codingLanguages: ["Ruby", "JavaScript", "Java", "C"]
}

person.name === "Max";
person["age"] === 26;
// below tries to use a variable named `gender` to access a value within our object
// However, we have not defined a variable with that name
// This will give us an error
// person[gender]; // error
// person[undefined]; // error
person["gender"]; // What is the value of the gender property of `person`
person.gender; // What is the value of the gender property of `person`

const propertyName = "gender";
person[propertyName] === "M";
// person["gender"];
// "M";
person.propertyName !== "M" 

const person = {
  firstName: "Max",
  lastName: "Gordon",
  age: 26,
  gender: "M",
  knowsJavaScript: true,
  codingLanguages: ["Ruby", "JavaScript", "Java", "C"]
};

person.name;
person.age;
person["name"]; // person.name;
const name = "name";
name;
name === "name";
person[name];
// JS converts the variable named `name`
// into its value, "name"
person["name"];

const variable = "name";
person[variable];
// Let's convert `variable` into its value
person["name"];

function whatsTheValue(propertyName) {
  const person2 = {
    name: "Max",
    age: 26,
    gender: "M",
    knowsJavaScript: true,
    codingLanguages: ["Ruby", "JavaScript", "Java", "C"]
  };
  return person2[propertyName];
}

whatsTheValue("codingLanguages");

person.blablabla === undefined;

// ^ This might be a WHHHAAAAATTT??? moment, and that is okay ^

person.height = "178 cm";
person["height"] = "178 cm";

const person = {
  firstName: "Max",
  lastName: "Gordon",
  age: 26,
  gender: "M",
  knowsJavaScript: true,
  codingLanguages: ["Ruby", "JavaScript", "Java", "C"]
};

// This says, that if someone wants to use the `fullName` function
// They need to pass in a parameter.
// This parameter needs to be an object
// And this object needs to have a "firstName" property and a "lastName" property
function fullName(personObject) {
  return personObject.firstName + ' ' + personObject.lastName;
}

// Here, we are using the `fullName` function
// It is here that fullName gets access to the person object defined/declared
// on line 306;
fullName(person); // "Max Gordon"
// So when calling the `fullName` function on line 326, the value of `personObject`
// in the function definition on line 319-321 becomes that person object from line 306
const secondPerson = {
  firstName: "Steve",
  lastName: "Godin"
}
fullName(secondPerson); // "Steve Godin"

// More functions

// The `val` argument is an argument that will get its value at a later time
// it gets its value when the giveBack function is called: giveBack(...)
function giveBack(val) {
  return val;
}

giveBack(10); // 10;
giveBack("Hello"); // "Hello"

const myVar = 10;
giveBack(myVar); // 10

function add(num1, num2) {
  return num1 + num2;
}

add(10, 13); // 23
// We can use variables instead of explicitly typing numbers, or strings or some other value
add(myVar, 13); // 23

// giveBack(...)






 



