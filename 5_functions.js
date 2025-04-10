function add(a, b) {
    return a + b;
}
console.log("Basic Function:",add(2, 3)); // Logs 5
console.log('-----------------');

let add2 = function(a, b) {
    return a + b;
}
console.log("Anonymous Function:",add2(2, 3)); // Logs 5
console.log('-----------------');

let add3 = (a, b) => {
    return a + b;
}
console.log("Arrow Function:",add3(2, 3)); // Logs 5
console.log('-----------------');

let add4 = (a, b) => a + b;
console.log("Arrow Function:",add4(2, 3)); // Logs 5
console.log('-----------------');

