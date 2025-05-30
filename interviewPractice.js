// String

//1. Reverse string
const str1 = "Manikandan";
const rev = str1.split("").reverse().join("");
console.log(`Reversed string: ${rev}`);

//2. Check Palindrome
const str2 = "AMMAq";
const rev2 = str2.split("").reverse().join("");
if (str2 === rev2) console.log(`${str2} : is palindrome`);
else console.log(`${str2} : is not palindrome`);

//3. Find vowels of the string
const str3 = "Manikandan";
const vowelString = str3.match(/[aeiou]/gi);
console.log(`Vowels of ${str3} is: ${vowelString}`);

// Number

//Find odd/even
let number;
function oddEven(number) {
  if (number % 2 == 0) return `${number} is Even Number`;
  else return `${number} is Odd Number`;
}
const num1 = 123;
console.log(oddEven(num1));

//Generate timestamp
const timestamp = Date.now();
console.log(`Current timestamp is: ${timestamp}`);

//Array

// String Array sort
const strArr1 = ["Mani", "Adaiaklam", "Tamil"];
const SortStr1 = strArr1.sort();
console.log(`String Array sort: ${SortStr1}`);

//Number Array sort
const numArr1 = [1, 20, 2, 3, 4, 5, -9];
const ascSort1 = numArr1.sort((a, b) => a - b);
console.log(`Ascending Order: ${ascSort1}`);

const descSort1 = numArr1.sort((a, b) => b - a);
console.log(`Ascending Order: ${descSort1}`);

//Min max
const max = Math.max(...numArr1);
const min = Math.min(...numArr1);

console.log(max);
console.log(min);


//Merge two arrays 
const arr1 = ['a', 'b', 'c'];
const arr2 = [1, 2, 3];

const merged = [];

for (let i = 0; i < arr1.length; i++) {
  merged.push(arr1[i]);
  merged.push(arr2[i]);
}

console.log(merged); // Output: ['a', 1, 'b', 2, 'c', 3]

const normalMerge = [...arr1, ...arr2];
console.log(normalMerge);


//1. Given a string s = "tomorrow" replace the second 'o' with $.

let s = "tomorrow";
let count = 0;

let result = s.split('').map(char => {
  if (char === 'o') {
    count++;
    if (count === 2) return '$';
  }
  return char;
}).join('');

console.log(result); // Output: "tom$rrow"

let s1 = "tomorrow";
let sec = s1.split('');
sec[sec.length-2]= '$';
let final = sec.join('');
console.log(final);




let result1 = s1.replace(/[o]/gi, '$');
console.log(result1); // Output: "t$m$rr$w"



const employees = [
    { id: 15, name: "Steven", age: 30, country: "Canada" },
    { id: 25, name: "John", age: 33, country: "USA" },
    { id: 40, name: "Steven", age: 25, country: "UK" }
  ];

  const filt = employees.filter(emp => emp.id ===15)

  const age = employees.filter(emp => emp.age > 25).map(nam => nam.name)
  const nam = age.map(nam => nam.name);

//console.log(age);


const fs = require('fs');
const employee = fs.readFileSync('employee.json', 'utf-8');
const jsonData = JSON.parse(employee);

const jsonDataemp = jsonData.filter(emp => emp.age===30)
const empname = jsonDataemp.map(emp => emp.name)
console.log(empname);