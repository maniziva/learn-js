const arr1 = [1, 3, 5, 7];
const arr2 = [2, 4, 6, 8];
const merged = [];

let i = 0, j = 0;

while (i < arr1.length) {
    merged.push(arr1[i]);
    i++;
  }
  
  while (j < arr2.length) {
    merged.push(arr2[j]);
    j++;
  }
  
const sortedMerged = merged.sort((a, b) => a - b); // Ascending order
//const sortedMerged = merged.sort((a, b) => a - b); // Descending order
// Remove duplicates
const uniqueSortedMerged = [...new Set(sortedMerged)];
console.log(uniqueSortedMerged); // Output: [1, 2, 3, 4, 5, 6, 7, 8]