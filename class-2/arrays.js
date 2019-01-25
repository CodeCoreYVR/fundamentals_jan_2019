// // example 1
// const myArray = [1,2,3,4,5];
// console.log(myArray);

const age = 36;
function tripleIt(a) {
  console.log('calculating');
  const result = a * 3;
  console.log('calculated');
  return result;
}

// // mixed value array
const anotherArray = ["Arturo", age, tripleIt(2)];
const anotherArray2 = ["Arturo", 36];
console.log(anotherArray);
console.log(anotherArray2);


const arr = ["Cooking", "Cleaning", "Working"];

// this is how we access an element
// in an array
console.log( arr[0] );

// this is how we set an element in an
// array
arr[0] = "shopping";
console.log( arr[0] );

// arr = "HELLO"

console.log(arr.length);
arr.push('hello');
arr.push('pizza');
console.log(arr);


/**
 * Create an array, first, containing the
 * elements "hello", 5 and 'a'
 */
const first = ["hello", 5, 'a'];

/**
 * change the second element of first
 * to 6
 */
first[1] = 6;

/**
 * create an array, second, containing
 * digits from 0 to 100
 */
const second = [];
for( let index = 0; index <= 100; index++ ) {
  second.push(index);
}

/**
 * compute the length of second
 */
console.log(second.length)