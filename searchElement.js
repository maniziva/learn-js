let arr = [1, 3, 3, 4, 5, 6, 6, 7, 8, 9, 9];
let search = 3; // 👈 Change this to any number you want to search

let indices = arr
  .map((val, idx) => val === search ? idx : -1)
  .filter(idx => idx !== -1);

if (indices.length > 0) {
  console.log(`Element ${search} found at indices: ${indices.join(', ')}`);
} else {
  console.log("Element not found");
}