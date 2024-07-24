
// print from 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}



// **********************************
// odd numbers less than 100
for (let i = 1; i < 100; i += 2) {
    console.log(i);
}


// **********************************
// print all the multiplication tables with numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(`Multiplication Table for ${i}`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i * j}`);
    }
    console.log(''); 
}

// **********************************
// sum of numbers from 1 to 10
let sum = 0;

for (let i = 1; i <= 10; i++) {
    sum += i;
}

console.log(`The sum of numbers is ${sum}`);

// *********************************
//  factorial of any number
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
// sum of even numbers greater than 10 and less than 30
let sum1 = 0;

for (let i = 12; i < 30; i += 2) {
    sum1 += i;
}

console.log(`The sum is ${sum1}`);


// *********************************
// convert from Celsius to Fahrenheit

const celsius = prompt("Enter a celsius value: ");

const fahrenheit = (celsius * 9/5) + 32

console.log(`${celsius} degree celsius is equal to ${fahrenheit} degree fahrenheit.`);


// ********************************
// sum of numbers in an array of numbers
let numbers = [3, 7, 12, 5, 9];
let sum2 = 0;

for (let i = 0; i < numbers.length; i++) {
    sum2 += numbers[i];
}
console.log(`The sum of numbers in the array is: ${sum2}`);


// ************************************
// average of the numbers in an array of numbers

let number1 = [1, 2, 3, 4, 5];
let sum3 = number1.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
let average = sum3 / numbers.length;

console.log(average); 


// **************************************
// highest and lowest number in an array of numbers
let num = [11, 12, 31, 65, 18];

let highest = Math.max(...num);

let lowest = Math.min(...num);

console.log(`Highest number: ${highest}`); 
console.log(`Lowest number: ${lowest}`);   








