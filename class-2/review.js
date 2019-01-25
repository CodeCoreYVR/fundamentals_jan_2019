let firstName = 'Jesus'; // mutable
const dateOfBirth = 'November 25 1982'; // immutable
var lastName = 'Rodriguez'; // mutable

{
  const example='test';

  console.log(example);
  {
    console.log(example);
  }
}
console.log(example)


console.log( `3 * 3 = ${3 * 3}` );
console.log( "Hello world" );
console.log( 'Hello world 2' );

// strict comparisson
console.log("2" === 2)