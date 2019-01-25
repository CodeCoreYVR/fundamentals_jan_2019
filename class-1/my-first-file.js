// Single Comments
/*
 Hello world
 */

console.log( Math.floor(3.33) ); // 3

console.log( Math.floor(3.88) ); // 3
console.log( Math.ceil(3.88) ); // 4
console.log( Math.ceil(3.33) ); // 4

console.log( Math.round(3.33) ); // 3
console.log( Math.round(3.66) ); // 4

/**
 * In this case, we are adding 2 + 2
 * within the curly brackets which is
 * displayed after the rest of the string
 */
console.log(`2 + 2 = ${ 2+2 }`)


/**
 * What is parseInt?
 * it converts data into a number
 */

/**
 * We dealing with data we deal with
 * a value, and a type
 */
typeof( "123" ); // String -> type
                 // value -> 123
typeof( 123 ); // Number -> type
                 // value -> 123

typeof( parseInt("123") ); // Number -> type
                 // value -> 123

console.log( typeof( "123" ) )
console.log( typeof( parseInt("123") ) )


/**
 * Variables
 */
const yearOfBirth = 1982;
let firstName = 'Jesus';
var nickname = 'Art';// this is declaring and initializing
var lastName; // this is declaring a variable
console.log(`My nicname is ${nickname}`);
nickname = 'artiee' // this is assigning value to a variable
console.log(`My nicname is ${nickname}`);

/**
 * A scope, has its own memory stack
 * and it is a way of grouping
 * instructions
 */

let vehicle = 'kia soul';
{
  let vehicle = 'kawasaki vulcan s';
}
{
  let vehicle = 'mazda';
}

// 2 nested scopes
{
  let vehicle = 'mazda';
  {
    let vehicle = 'mazda'; // local variable
    var vehicle2 = 'mazda'; // global variable
  }
}




let age = 36;
if ( age > 30 ) {
  console.log( "it's ok..." );
} else {
  console.log( "you are young" );
}

const grade = 'd';

if (grade == 'a') {
  console.log('Nice job!');
  console.log('Nice job!');
  console.log('Nice job!');
  console.log('Nice job!');
} else if (grade == 'b') {
  console.log('nice');
} else if (grade == 'c') {
  console.log('your ok');
} else {
  console.log('you suck');
  console.log(':('); console.log(':(');
}
console.log('the end');


switch(grade) {
  case 'a':
    console.log('Nice job!');
    console.log('Nice job!');
    console.log('Nice job!');
    console.log('Nice job!');
    break;
  case 'b':
    console.log('Nice job!');
    break;
  default:
    console.log(':(');
    break;
}


let i = 10;
while( i > 5 ) {
  console.log(`-----`);
  console.log(`I before decrementing is ${i};`)
  i -= 1;
  console.log(`I after decrementing is ${i};`)
}

// in this case, i is a local variable that
// is only accessible within the for loop
for ( let i = 10; i > 5; i -= 1 ) {
  console.log(`I is ${i};`);
}
// console.log(`I is ${i};`); // i does not exist. Program crash

// if you want to make i global
let i;
for ( i = 10; i > 5; i -= 1 ) {
  console.log(`I is ${i};`);
}

// another example
let i = 10;
for ( ; i > 5; i -= 1 ) {
  console.log(`I is ${i};`);
}
console.log(`OUT OF LOOP: I is ${i};`);

// another example
let i;
for (i = 10; i > 5; i -= 1 ) {
  console.log(`I is ${i};`);
}
console.log(`OUT OF LOOP: I is ${i};`);