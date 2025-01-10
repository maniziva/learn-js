var marks = [1, 2, 3, 4, 5];
console.log(marks); // Logs the array [1, 2, 3, 4, 5]
console.log('-----------------');
console.log(marks[2]); // Logs the third element of the array: 3
console.log('-----------------');
console.log(marks.length); // Logs the length of the array: 5
console.log('-----------------');
marks.push(6);
console.log(marks); // Logs the array after adding 6: [1, 2, 3, 4, 5, 6]
console.log('-----------------');
marks.pop();
console.log(marks); // Logs the array after removing the last element: [1, 2, 3, 4, 5]
console.log('-----------------');
marks.shift();
console.log(marks); // Logs the array after removing the first element: [2, 3, 4, 5]
console.log('-----------------');
marks.unshift(0);
console.log(marks); // Logs the array after adding 0 at the beginning: [0, 2, 3, 4, 5]
console.log('-----------------');
console.log(marks.indexOf(3)); // Logs the index of 3: 2
console.log('-----------------');
console.log(marks.includes(3)); // Logs true because 3 is present in the array
console.log('-----------------');
var newMarks = marks.slice(1, 3);
console.log(newMarks); // Logs the new array [2, 3]
console.log('-----------------');

for(i=0; i<marks.length; i++){
    console.log(marks[i]); // Logs all the elements of the array
}