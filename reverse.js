const arr = [1, 2, 3, 4, 5];
arr.reverse();
console.log("Array Integer reverse:",arr); // Output: [5, 4, 3, 2, 1]

const fruits = ["apple", "banana", "cherry"];
const reversedArray = fruits.reverse();
console.log("Array String reverse:",reversedArray); // Output: [""cherry"", ""banana"", ""apple""]"

const str = "hello";
const reversedStr = str.split('').reverse().join('');
console.log("String reverse:",reversedStr); // Output: ""olleh"""

const fruits2 = ["apple", "banana", "cherry"];
const reversedStrings = fruits2.map(word => word.split('').reverse().join(''));
console.log("Each array string reverse:",reversedStrings); // Output: [""elppa"", ""ananab"", ""yrrehc""]