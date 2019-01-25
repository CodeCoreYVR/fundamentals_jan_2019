/**
 * This is a function definition
 */
function makePizza(pizza) {
  console.log('\nPizza coming out:');
  for( let i = 0; i < pizza.length; i += 1 ) {
    console.log(`  - ${pizza[i]}`);
  }
}

/**
 * ------------
 * Print Firoz Fav. Pizza
 */
const firozPizza = [
  'Pineapple',
  'Cheese',
  'Peperoni',
  'Broccoli'
];
makePizza( firozPizza );

const ninasPizza = [
  'tomato sauce',
  'Cheese',
  'basil'
];
makePizza( ninasPizza );

const pizza = [
  'Pineapple',
  'Cheese',
  'Peperoni',
  'Broccoli'
];

// console.log('\nPizza coming out:');
// for( let i = 0; i += 1; i < pizza.length ) {
//   console.log(`  - ${pizza[i]}`);
// }

// With this syntax, we are extract
// each item into the "condiment"
// variable
// console.log('\nPizza coming out:');
// for( let condiment of pizza ) {
//   console.log(`  - ${condiment}`);
// }

// we are extract the index of every item
// into the variable "index"
console.log('\nPizza coming out:');
for( let index in pizza ) {
  console.log(`  - ${pizza[index]}`);
}