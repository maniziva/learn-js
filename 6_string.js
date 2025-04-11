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
console.log(lastchar);


const last2char = day.slice(-2);
console.log(last2char); // Logs 'ay'

let firstTwo = day.substring(0, 2);
console.log(firstTwo); // Logs 'Fr'

let splitDay = day.split('i');
console.log(splitDay); // Logs ['Fr', 'day']