const arr = [1, 2, 2, 3, 4, 4, 5];
const uniqueArr = [...new Set(arr)];
console.log(uniqueArr); // Output: [1, 2, 3, 4, 5]

// Explanation:
// 1. We create a new Set from the array. A Set is a collection of unique values.
// 2. The Set automatically removes duplicates.
// 3. We then convert the Set back to an array using the spread operator (...).
// 4. The result is an array with only unique values.
// 5. Finally, we log the unique array to the console.
// This method is efficient and works well for most cases.
// Note: This method is not suitable for large arrays or performance-critical applications.
// In such cases, consider using a more optimized algorithm or data structure.
// Example with strings
const strArr = ['apple', 'banana', 'apple', 'orange'];
const uniqueStrArr = [...new Set(strArr)];
console.log(uniqueStrArr); // Output: ['apple', 'banana', 'orange']
// Example with objects
const objArr = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 1, name: 'John' },
];
const uniqueObjArr = Array.from(new Set(objArr.map(JSON.stringify))).map(JSON.parse);
console.log(uniqueObjArr); // Output: [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }]
// Explanation: