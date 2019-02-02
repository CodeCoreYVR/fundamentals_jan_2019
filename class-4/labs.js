const arrayOfNums = [76, 33, 45, 87, 100, 36];
// This is the minimum function
// it is given an array of numbers, and then it will return the
// smallest number from that array
function minimum(arr) {
  let minSoFar = Infinity;
  for (let i = 0; i < arr.length; i++) {
    const currentNum = arr[i];
    if (currentNum < minSoFar) {
      minSoFar = currentNum;
    }
  }
  /*
    // we can also use the for..of syntax
    for (let currentNum of arr) {
      if (currentNum < minSoFar) {
            minSoFar = currentNum;
        }
    }
    */
  return minSoFar;
}

// This is how we call the function
minimum(arrayOfNums);

// This is the maximum function
// it is given an array of numbers, and then it will return the
// largest number from that array
function maximum(arr) {
  let maxSoFar = -Infinity;
  // let maxSoFar = arr[0];
  // When creating a for...of loop
  // the value of the variable that is
  // placed after the `of` needs to
  // be an array
  // This is the array that we will be looping over
  for (let currentNum of arr) {
    if (currentNum > maxSoFar) {
      maxSoFar = currentNum;
    }
  }
  return maxSoFar;
}
// This is how we call the function
maximum(arrayOfNums);

// This is the minMax function
// it is given an array of numbers, and then it will return the
// another array.
// This other array will contain two values:
// the smallest number in the input array, followed by the largest number
function minMax(arr) {
  // Here we are calling the minimum function that we defined
  // in order to find the smallest number in the array
  let min = minimum(arr);
  // Here we are calling the maximum function that we defined
  // in order to find the largest number in the array
  let max = maximum(arr);
  // Here we return an array containing the min and max values
  return [min, max];
}
// Here we call minMax
minMax(arrayOfNums);

// We cannot use Math.max to solve this, unfortunately since Math.max
// requires a "list" of numbers, not an array
// Math.max(2,3,4,5,6,7)

/*
Write a function that takes an object that looks like:

cities = { vancouver: 603502, burnaby: 223220, langley: 104177 } 
and prints if the city is large (more than 150,000) or small 
(otherwise). The printout should look something like: 
vancouver is a large city
*/
// This capitazlie function was created as part of the Stretch
// This will take the first letter in an input string and make it uppercase
// Then it will append that letter to the rest of the string
function capitalize(str) {
  return str.slice(0, 1).toUpperCase() + str.slice(1);
}

const cities = { vancouver: 603502, burnaby: 223220, langley: 104177 };

function howBigAreTheCities(citiesObj) {
  // Here we are using the for..in loop to loop over our citiesObj
  // the citiesObj has key value pairs
  // The `key` is the name of a city, and the value is that cities population
  // When looping using for..in, we are given a key from the object each time
  // the for-loop loops.
  // So in this case,
  // the first time the for-loop executes,
  // `cityName` will be "vancouver".
  // the next time the for-loop executes,
  // `cityName` will be "burnaby".
  // the last time the for-loop executes,
  // `cityName` will be "langley".
  for (let cityName in citiesObj) {
    // `citiesObj[cityName]` is the syntax we use to access a value associated
    // with a key within an object
    // In this case, when `cityName` has the value "vancouver"
    // This will be equivalent to "asking" the object
    // "What value do you have stored in association with `vancouver`?"
    // And it will return to use the value associated with that key: 603502
    if (citiesObj[cityName] > 150000) {
      console.log(`${capitalize(cityName)} is a large city`);
    } else {
      console.log(`${capitalize(cityName)} is a small city`);
    }
  }
}
howBigAreTheCities(cities);

/*
Given an object that looks like:

names = { mike: 2, john: 3, jen: 5, eli: 1}
Write a function that takes an object above and returns a 
string noting the most popular name. It should return a 
string that looks like: the most popular name is jen
*/

function popularName(names) {
  let mostPopularName = '';
  let mostPopularNameCount = 0;

  // This is looping over the keys of the object
  // Since each key in the names object represents a name
  // I have called the variable `name`
  for (let name in names) {
    const count = names[name];
    if (count > mostPopularNameCount) {
      mostPopularName = name;
      mostPopularNameCount = count;
    }
  }

  return `The most popular name is ${mostPopularName}`;
}
const names = { mike: 2, john: 3, jen: 5, eli: 1 };
popularName(names);

/*
Write a function that prompts the user to enter a sentence 
and then return an object whose keys are the letter and 
values are the number of occurrences of that letter, 
for example, if the user enters hello world, it will return: 
  {h: 1, e: 1, l: 3, o: 2, w: 1, d: 1}
*/

function letterCount(sentence) {
  const countingObj = {};
  for (let character of sentence) {
    if (character !== ' ') {
      const countSoFar = countingObj[character];
      if (countSoFar === undefined) {
        countingObj[character] = 1;
      } else {
        countingObj[character] = countSoFar + 1;
      }
    }
  }
  return countingObj;
}
letterCount('hello world');
