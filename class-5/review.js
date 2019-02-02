// Write a function that takes any number as an argument
// but always returns 0

function zeroChris(num) {
    return num * 0;
}
zeroChris(5);
zeroChris(10);
function zero(num) {
    return 0;
}

// Write a function that takes an object as an argument
// This object will represent a `user`
// It will have `name` and `age` properties.
// This function logs to the console:
// "[name] is [age] years old"
function userPrinter(user) {
    // user = { name: "Max", age: 13 }
    // user.name === "Max", user.age === 13
    const result = `${user.name} is ${user.age} years old`;
    console.log(result);
}
const userMax = {
    name: "Max",
    age: 13
};
const userSteve = {
    name: "Steve",
    age: 172
};
userPrinter(userMax);
userPrinter(userSteve);

// Write a function that takes a sentence as an argument
// for example "Hello its me"
// or "Hello from the other side"
// return an object of all the words and their lengths
// for example:
// wordLength("Hello from the other side"); 
// ^the above would return => {"Hello": 5, "from": 4, "the": 3, ...}
function wordLength(sentence) {
    const retObj = {};
    const arrayOfWords = sentence.split(" ");
    // words = ["Hello", "from", "the", "other", "side"]
    for (let word of arrayOfWords) {
        // modify retObj here
        // console.log('word:', word);
        // retObj.name = "";
        // retObj["name"] = "";
        const lengthOfWord = word.length;
        retObj[word] = lengthOfWord; 
    }
    /*
    for (let i = 0; i < arrayOfWords.length; i++) {
        let word = arrayOfWords[i];
        const lengthOfWord = word.length;
        retObj[word] = lengthOfWord
    }
    */

    return retObj;
}
wordLength("Hello from the other side");
