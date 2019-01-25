const age = 36;

/**
 * Syntax types:
 * 
 *    function FUNC_NAME ( ARG1, ARG2, ... ) {
 *      ...
 *    }
 *    const FUNC_NAME = function ( ARG1, ARG2, ... ) {
 *      ...
 *    }
 *    const FUNC_NAME ( ARG1, ARG2, ... ) => {
 *      ...
 *    }
 */

/**
 * this defines the function
 */
function printAge(myAge) {
  console.log(`My age is ${myAge}`);
}

const printAge2 = function(myAge) {
  console.log(`My age is ${myAge}`);
}

const printAge3 = (myAge) => {
  console.log(`My age is ${myAge}`);
}

/**
 * this calls the function
 */
printAge(age);


const tripleIt = function(val) {
  return val * 3;
}
const result = tripleIt(2);
console.log(`the result is ${result}`);