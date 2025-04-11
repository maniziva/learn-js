let day = 'Friday';
console.log(day); // Logs 'friday'
console.log(day.toUpperCase()); // Logs 'FRIDAY'
console.log(day.toLowerCase()); // Logs 'friday'    
console.log(day.length); // Logs 6
console.log(day.charAt(0)); // Logs 'f'
console.log(day.charAt(day.length - 1));// Logs 'y'

console.log(day.indexOf('F')); // Logs 0
console.log(day[1]); //r

const getlastindex = day.length - 1;
const lastchar = day[getlastindex];
console.log(lastchar); // Logs 'y'

const last2char = day.slice(-2);
console.log(last2char); // Logs 'ay'

let firstTwo = day.substring(0, 2);
console.log(firstTwo); // Logs 'Fr'

let splitDay = day.split('i');
console.log(splitDay); // Logs ['Fr', 'day']

let splitDay2 = day.split('');
console.log(splitDay2); // Logs ['F', 'r', 'i', 'd', 'a', 'y']

let splitDay3 = day.split(' ');
console.log(splitDay3); // Logs ['Friday']


let arr = [5, 1, 9, 3, 7];

arr.sort((a, b) => a - b); // Sort ascending

console.log("Second Smallest:", arr[1]);
console.log("Second Largest:", arr[arr.length - 2]);


let a = '27'
let b = '3'

let diff = a - b;
console.log(diff); // Logs 24

let diff2 = parseInt(a) - parseInt(b);
console.log(diff2); // Logs 24

diff2.toString();
console.log(diff2); // Logs 24