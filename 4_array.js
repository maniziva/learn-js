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

var sum=0;
for(i=0; i<marks.length; i++){
    //console.log(marks[i]); // Logs all the elements of the array
    sum=sum+marks[i];
}
console.log('Sum: '+sum); // Logs the sum of all the elements
console.log('-----------------');

var score = [11, 22, 33, 44, 55];
console.log(score); // Logs the array [11, 22, 33, 44, 55]
var evenSum = []; // Initialize evenSum as an array
var oddSum = []; // Initialize oddSum as an array

for(var i=0; i<score.length; i++){
    if(score[i]%2==0){
        evenSum.push(score[i]);
    }
    else if(score[i]%2!=0){
        oddSum.push(score[i]);
    }
}
console.log('Even Sum Array: ', evenSum); // Logs the array of even numbers
console.log('Odd Sum Array: ', oddSum); // Logs the array of even numbers
