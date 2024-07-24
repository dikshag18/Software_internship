// **********LOOPS IN JAVASCRIPT************

// for Loop
// The for loop is used when the number of iterations is known. It has three parts: initialization, condition, and increment/decrement.
// The initialization part is used to initialize the loop counter. The condition part is used to check whether the loop should continue or not. The increment/decrement part is used to increment or decrement the loop counter.


for (let i = 0; i < 10; i++) {
    console.log(i); 
}


// for...in Loop
// The for...in loop iterates over the enumerable properties of an object (or elements of an array).
// The for...in loop is used to iterate over the properties of an object.

const obj = {a: 1, b: 2, c: 3};

for (let key in obj) {
    console.log(key, obj[key]); // prints "a 1", "b 2", "c 3"
}

const array = [10, 20, 30];

for (let index in array) {
    console.log(index, array[index]); // prints "0 10", "1 20", "2 30"
}

// for...of Loop
// The for...of loop iterates over the values of an iterable object (like arrays, strings, etc.)
// The for...of loop is used to iterate over the values of an iterable object.
// The for...of loop is similar to the for...in loop, but it iterates over the values of an iterable object, while the for...in loop iterates over the properties of an object.


const arr = [10, 20, 30, 40, 50];

for (let value of arr) {
    console.log(value); 
}

const string1 = "hello";

for (let char of string1) {
    console.log(char); // prints "h", "e", "l", "l", "o"
}


// while Loop
// The while loop executes its statements as long as a specified condition evaluates to true.
// The while loop is used when the number of iterations is not known. It has two parts: The condition part is used to check whether the loop should continue or not. The increment/decrement part is used to increment or decrement the loop counter.

let i = 0;
while (i < 10) {
    console.log(i); 
    i++;
}


// CONDITIONAL STATEMENTS in JavaScript

// if...else Statement
// The if...else statement executes a block of code if a specified condition is true. If the condition is false, another block of code can be executed.

const prompt = require("prompt-sync")();
const number = parseInt(prompt("Enter any number: "));

if (number > 0) {
    console.log("The number is positive");
} else {
    console.log("The number is not positive");
}

const prompt2 = require("prompt-sync")();
const score = parseInt(prompt("enter your score: "));

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: D");
}

// switch Statement
// The switch statement evaluates an expression and executes the corresponding case block. If no case matches, the default block is executed.

const prompt1 = require("prompt-sync")();
const day = prompt("Enter a Day: ");

switch (day) {
    case "Monday":
        console.log("Start of the work week");
        break;
    case "Friday":
        console.log("End of the work week");
        break;
    default:
        console.log("Midweek day");
}


// Arrow Functions in JavaScript
// Arrow functions provide a concise syntax for writing function expressions and do not have their own this, arguments, super, or new.target. They are always anonymous.
// Arrow functions are not hoisted. They must be declared before they are referenced.

const add = (a, b) => a + b;

console.log(add(2, 3)); // prints 5

const multiply = (a, b) => {
    let result = a * b;
    return result;
};

console.log(multiply(2, 3));

