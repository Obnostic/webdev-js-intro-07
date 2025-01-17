// Prevent us from attempting to use variables
// that are not declared
"use strict"

//Create some functions return a value and log that value to the console.
function add(num1, num2) {
    return num1 + num2;
}

//Create some functions that take in arguments, but also have default parameters.
function greet(name = 'Guest') {
    console.log('Hello, ' + name + '!');
}

//Create some functions that take in arguments. Try to write at least 
// one that returns a value and one that doesn't.
function greet2(name) {
    console.log('Hello, ' + name + '!');
}








console.log("SUM:");
let sum = add(2, 4);
console.log(sum);        // Output: 6 


console.log("GREET:");
greet();         // Output: "Hello, Guest!"
greet("Dan");    // Output: "Hello, Dan!"

console.log("GREET2 with no default:");
greet2();         // Output: "Hello, undefined!"
greet2("Dan");    // Output: "Hello, Dan!"


