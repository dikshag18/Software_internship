
// Que 1
for (let i = 1; i <= 10; i++) {
    console.log(i);
}



// **********************************
// Que 2
for (let i = 1; i < 100; i += 2) {
    console.log(i);
}


// **********************************
// Que 3
for (let i = 1; i <= 10; i++) {
    console.log(`Multiplication Table for ${i}`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i * j}`);
    }
    console.log(''); 
}

// **********************************
// Que 4
let sum = 0;

for (let i = 1; i <= 10; i++) {
    sum += i;
}

console.log(`The sum of numbers is ${sum}`);

// *********************************
// Que 5
const prompt = require("prompt-sync")();
const number = parseInt(prompt('Enter a positive integer: '));
// let num = 5; 
let factorial = 1;

// Check for 0!
if (number === 0) {
  factorial = 1;
} else {
  // Calculate factorial
  for (let i = 1; i <= number; i++) {
    factorial *= i;
  }
}

console.log("Factorial of " + number + " is " + factorial);


// **********************************
// Que 6
let sum1 = 0;

for (let i = 12; i < 30; i += 2) {
    sum1 += i;
}

console.log(`The sum is ${sum1}`);


// *********************************
// Que 7
const celsius = prompt("Enter a celsius value: ");

// calculate fahrenheit
const fahrenheit = (celsius * 9/5) + 32

// display the result
console.log(`${celsius} degree celsius is equal to ${fahrenheit} degree fahrenheit.`);


// ********************************
// Que 8
let numbers = [3, 7, 12, 5, 9];
let sum2 = 0;

for (let i = 0; i < numbers.length; i++) {
    sum2 += numbers[i];
}

console.log(`The sum of numbers in the array is: ${sum2}`);


// ************************************
// Que 9
let number1 = [1, 2, 3, 4, 5];

let sum3 = number1.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

let average = sum3 / numbers.length;

console.log(average); 


// **************************************
// Que 10
let num = [1, 2, 3, 4, 5];

let highest = Math.max(...num);

let lowest = Math.min(...num);

console.log(`Highest number: ${highest}`); 
console.log(`Lowest number: ${lowest}`);   








