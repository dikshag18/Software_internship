// Datatypes in JavaScript can be divided into primitive and object types:

// Primitive Datatypes

// Number: Represents both integer and floating-point numbers.
let num = 42; // integer
let floatNum = 3.14; // floating-point
console.log(num);
console.log(floatNum);

// String: Represents text data
let str = "Hello, World!";
console.log(str);

// Boolean: Represents true or false
let isTrue = true;
console.log(isTrue);

// Null: Represents an intentional absence of any object value
let emptyValue = null;
console.log(emptyValue);

let notDefined;
console.log(notDefined); // undefined

let sym = Symbol('description');
console.log(sym);


// Object: A collection of key-value pairs.
let obj = {
    name: "Hello",
    age: 21
};
console.log(obj);


// Array: A special type of object used for storing ordered collections.
let arr = [1, 2, 3, 4, 5];
console.log(arr);


// **********************************************************
// Operators
// JavaScript provides various operators for performing operations on data

// Arithmetic Operators

let a = 10;
let b = 5;
console.log(a + b); //  (Addition)
console.log(a - b); //  (Subtraction)
console.log(a * b); // (Multiplication)
console.log(a / b); // (Division)
console.log(a % b); // (Modulus)
console.log(a ** b); // (Exponentiation)


// Comparison Operators

let x = 10;
let y = 5;
console.log(x > y); 
console.log(x < y); 
console.log(x >= y); 
console.log(x <= y); 
console.log(x == y);
console.log(x != y); 
console.log(x === y); 
console.log(x !== y); 


// Logical Operators

let val1 = true;
let val2 = false;
console.log(val1 && val2); 
console.log(val1 || val2); 
console.log(!val1); 

