// Write a funciton called insult that takes a single argument, `name`
// and returns an insult
// Like 
// "Bob, you're a doofus!";

function insult(name) {
  // This solution uses string interpolation
  return `${name}, you're a doofus!`;
}

function insult1(name) {
  // This solution uses string concatenation
  return name + ", you're a doofus!";
}

insult("Bob");
insult("Max");
insult("Steve");
// The 2 lines below do NOT throw a error
const Bob = undefined;
insult(Bob);
// The line below will cause an error since the variable Dave
// has not been declared
// insult(Dave)

// This is how to print the result to the console
console.log(insult("Bob"));

// Write a function named `increment` that takes a number and returns that number plus 1.
function increment(number) {
  return number + 1;
}

// We use like this
increment(5);
increment(10);

// Arrays

// create an array named `first` who's elements are "Hello", 5, and 'a'
const first = ["Hello", 5, 'a'];
first[1]; // This is 5
// Update the 2nd element to be 6
first[1] = 6;
first[1]; // Now this is 6
// create an array named `second` with the numbers from 0 to 10
const second = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// What is its length?
second.length; // 11

// Looping over an array
const letters = ['a', 'b', 'c', 'd', 'e'];
for (let i = 0; i < letters.length; i++) {
  // console.log(i);
  // i is incremented between each execution of the for-loop
  // it is initially 0
  // so the code below prints out the element of our letters array that
  // exists at index 0
  console.log(letters[i]);
  // then we increment using i++, so i becomes 1 and then we loop
  // We then check is 1 < letters.length -> 1 < 5
  // we see that that is true, so we execute the loop again
  // This continues until i becomes >= 5
}

const letters = ['a', 'b', 'c', 'd', 'e'];
// for (let i = 0; i < letters.length; i++) {
//   // console.log(i);
//   console.log(letters[i])
// }
// i + 1; // i is not defined/declared

// `for` `(``let` someVariableName `of` someArray`)` `{`
// `}`
// This is another way to loop through an array
// This gives us the value at each index, as opposed to the index itself
for (let value of letters) {
  // value is initally 'a',
  // then it is 'b',
  // then it is 'c'...
  // until it reaches the end of the array
  console.log(value);
}
// value only exists inside of the for..of loop above

const numbers = [9,8,7,6];
for (let x of numbers) {
  console.log(x);
}
// x only exists inside of the for..of loop above

// Sum the values in an arrays of numbers using a for-loop
const arrayOfNumbers = [0, 6, 5, -12]; // -1;
let sum = 0;
for (let value of arrayOfNumbers) {
  // initially `sum` is 0, and `value` is 0
  // Then we update `sum` to be our previous sum
  // plus the current value
  // That is to say, update `sum` to be 0 + 0
  // So our new sum becomes 0
  sum = sum + value;
  // Then we loop.
  // Our `sum` is 0.
  // `value` is 6.
// We update `sum` to be 0 + 6;
//  Then we loop.
// `sum` is 6. `value` is 5
// We then update `sum` to be 6 + 5 -> 11
// Then we loop.
// `sum` is 11, `value` is -12
// we then update `sum` to be 11 + (-12) -> 11 - 12 -> -1
}
sum;

const arr = [0, 6, 5, -12];
let sum1 = 0;
for (let i = 0; i < arr.length; i++) {
  sum1 = sum1 + arr[i];
  // 0 + 6 + 5 - 12 = -1
}
console.log(sum1);

// This was a stretch
// you have made a reusable summation function!!!
function summation(inputArr) {
  let sum = 0;
  for (let i = 0; i < inputArr.length; i++) {
    sum = sum + inputArr[i];
    // 0 + 6 + 5 - 12 = -1
  }
  return sum;
}
summation(arr); // -1
summation([4,2,7]); // 13


// create an array containing the following words: 
// "apple" "dog" "computer" "cup"
// use a loop to loop over the array
// and print to the console sentences formatted like this:
// "[word] has [word length] characters"
const arr = ["apple", "dog", "computer", "cup"];
for (let word of arr) {
  // "[word] has [length] characters";
  console.log(`${word} has ${word.length} characters`);

  // console.log(word + " has " + word.length + " characters");
}

for (let i = 0; i < arr.length; i++) {
  const word = arr[i];
  console.log(`${word} has ${word.length} characters`);
  // console.log(`${arr[i]} has ${arr[i].length} characters`);
}

// If statements

if (true) {
  console.log("This will always print to the console");
}

if (false) {
  console.log("This will NEVER print");
}

if (5 > 3) {
  console.log("It is bigger!");
}

const myNum = 10;
if (myNum > 5) {
  console.log("That is a big number!");
} 

if (5 < 3) {
  console.log("This will not run");
} else {
  console.log("since 5 is not less than 3, this will run");
}

const arr = [1, 2, 3, 4, 5, 6];
for (let num of arr) {
  if (num > 3) {
    console.log(`${num} > 3`);
  }
}

// Using .split or .join to convert between a string and an array and vice versa
const myStr = "an apple a day";
const arr = myStr.split(" "); // ["an", "apple", "a", "day"]
const myStr2 = "an, apple, a day";
myStr2.split(", "); // ["an", "apple", "a day"]

const myStr3 = "hello world";
const arr3 = myStr3.split(""); // ["h","e","l","l","o"," ","w","o","r","l","d"]

arr.join(""); // "anappleaday"
arr.join(" "); // "an apple a day"
arr.join("!!!") // "an!!!apple!!!a!!!day"

// Create a string "hello"
// Then split that string into an array
const myString = "hello";
myString.split(""); 
// "" <- this is called the empty string
// '' <- so is this
// `` <- so is this

// Create an object, me, with your naem age and occupation
const me = {
  name: "Max Gordon",
  age: 26,
  occupation: "Web Developer"
};
// update my occupation to 'javascript expert'
me.occupation = 'javascript expert';
// now me.occupation is 'javascript expert'
const skills = ['ruby', 'rails', 'javascript'];
// This adds a new property to the `me` object
// the name of that property is `skills`
// and the value is ['ruby', 'rails', 'javascript']
me.skills = skills;
// me.skills = ['ruby', 'rails', 'javascript'];
/*
const me = {
  name: "Max Gordon",
  age: 26,
  occupation: "javascript expert",
  skills: ['ruby', 'rails', 'javascript']
};
*/

me.name;
const name = "name";
me[name];

// You can give an object a property whose names has a space in it
// but you need to do one of the follwing two things
// When declaring the object, you need to put square brackets and quotation
// marks around the property name
const obj = {
  ["space name"]: "asdjkasdjk"
}
// or when updating/assigning a new property to the object
// you will also use square brackets and quotes around the property name
obj["other property"] = "some value";

// obj.space name // This means you cannot use `.` dot notation
// obj."space name" <- this will also lead to an error
obj["space name"] // <- this is how you access a property with a space in its name

const me = {
  name: "Max Gordon",
  age: 26,
  occupation: "javascript expert",
  skills: ['ruby', 'rails', 'javascript']
};
function about(user) {
  console.log(`${user.name} is ${user.age} years old.`);
}
about(me);

// for..in
// A way to loop over objects
for (let property in me) {
  // `property` refers to the properties within the me object
  // one at a time.
  // it first gets the value of "name", then "age", then "occupation", then "skills"
  console.log(property);
  // to access the value associated with that property within the me object
  // we use the square bracket notation below
  console.log(me[property]);
  // And this will print "Max Gordon". then 26, 
  // then "javascript expert", then ['ruby', 'rails', 'javascript']
  // as the variable named property gets updated to the different property names
}
