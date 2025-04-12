  // Example usage:
  const arr = [1, 2, 4, 4, 5];
  // const arr = [10,8,6,4,2];

 function isSorted(arr) {
    let ascendingorder = true;
    let descendingorder = true;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            ascendingorder = false;
        }
        else if (arr[i] > arr[i - 1]) {
            descendingorder = false;
        }            
    }
    if (ascendingorder === true) {
        return "Array is sorted in ascending order";
    } else if (descendingorder === true) {
        return "Array is sorted in descending order";
    } else {
        return "Array is not sorted";
    }
}

 console.log(isSorted(arr)); // Output depends on the input array