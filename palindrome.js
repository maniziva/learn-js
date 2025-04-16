
function palindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
    
    // Check if the cleaned string is equal to its reverse
    return cleanedStr === cleanedStr.split('').reverse().join('');
    
}

// Test cases
console.log(palindrome("racecar")); // true