const flag = true;
if (flag) {
  console.log("True"); // Logs 'True' because flag is true
} else {
  console.log("False");
}
console.log("-------------------");
if (!flag) {
  console.log("True");
} else {
  console.log("False"); // Logs 'False' because !flag is false
}
console.log("-------------------");
let i = 0;
while (i < 10) {
  console.log(i); // Logs numbers from 0 to 9
  i++;
}
console.log("-------------------");
let j = 0;
do {
  j++;
  console.log(j); // Logs numbers from 1 to 10
} while (j < 10);
{
  console.log("do while loop" + j); // Logs 'do while loop10' because the condition is false
}
console.log("-------------------");
for (let k = 0; k < 100; k++) {
  if (k % 2 == 0 && k % 5 == 0) {
    // Even Numbers along with multiple of 5
    console.log(k); // Logs numbers that are multiples of 10 from 0 to 90
  }
}
console.log("-------------------");
