// While-loops

let i = 0;
while (i < 10) {
	console.log(i);
	i = i + 1;
	// i += 1;
	// i++;
}
// The loop above prints out the numbers from 0 to 9

// This loop willl "crash" the browser
// We have created an "infinite loop"
let i = 5;
while (i > 0) {
	console.log(i);
	// Since we start at i = 5, and we keep making i bigger
	// on each iteration, we will never reach our "termination condition"
	i++;
}

// ... some other code

let time = 0;
// setInterval is known as an "asynchronous" function
// That means that the code within the setInterval will not execte
// from top to bottom as all other code (synchronous code) has before this
//
// The code below starts a timer that counts up to 30 and then stops
function incrementTimer() {
	console.log(time);
	time += 1;
	if (intervalId > 30) {
		clearInterval(intervalId);
	}
}
const intervalId = setInterval(incrementTimer, 1000);
console.log('test');
console.log('more tests');
// For that reason, we will see logged to the console
// "test"
// "more tests"
// 0
// 1
// 2
// ...

// Higher Order Functions

// filter

function isEven(num) {
	return num % 2 === 0;
}

function filter(array, fn) {
	const newArr = [];
	for (let val of array) {
		if (fn(val)) {
			newArr.push(val);
		}
	}
	return newArr;
}

filter([1, 2, 3, 4], isEven); // => [2,4]
function isLargerThan5(num) {
	return num > 5;
}
filter([1, 2, 3, 4], isLargerThan5); // => []
filter([2, 7, 4, 9, 6, 3, 1], isLargerThan5); // => [7,9,6]

// change a sentence into an object where the keys are the words in the sentemce
// and the values are the lengths of those words

const sentence = 'Max is great';
const arrayOfWords = sentence.split(' '); // => ["Max", "is", "great"];
const wordsObj = {};
for (let word of arrayOfWords) {
	wordsObj[word] = word.length;
}
console.log(wordsObj); // { Max: 3, is: 2, great: 5 }
