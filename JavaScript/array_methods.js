// *************Array Methods**************

// push() - Adds one or more elements to the end of an array and returns the new length of the array.

let arr = [1, 2, 3, 5, 6];
arr.push(4); 

// pop() - Removes the last element from an array and returns that element.

let arr1 = [1, 2, 3, 4, 5];
arr.pop(); 

// shift() - Removes the first element from an array and returns that element.

let arr2 = [1, 2, 3, 4, 5];
arr.shift(); 

//  unshift() - Adds one or more elements to the beginning of an array and returns the new length of the array.

let arr3 = [1, 2, 3, 4, 5, 6];
arr.unshift(0); 

// splice() - Changes the contents of an array by removing or replacing existing elements and/or adding new elements.

let arr4 = [1, 2, 3, 4, 5];
arr.splice(1, 1, 'a'); // arr becomes [1, 'a', 3]


// length - The length property returns the length (size) of an array:

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;
console.log(size);

// slice() - Returns a shallow copy of a portion of an array into a new array object selected from start to end (end-1).

let arr5 = [1, 2, 3, 4];
let newArr = arr.slice(1, 3); // newArr is [2, 3]
console.log(newArr);

// concat() - Merges two or more arrays and returns a new array.

let array = [1, 2];
let array1 = [3, 4];
let newArray = array.concat(array1); // newArr is [1, 2, 3, 4]
console.log(newArray);

// forEach() - Executes a provided function once for each array element.
// The forEach() method calls the provided function once for each element in an array in ascending order.

let arrayb = [1, 2, 3];
arr.forEach((item) => console.log(item)); 


// map() - Creates a new array populated with the results of calling a provided function on every element in the calling array.

let array2 = [1, 2, 3];
let newAray = array2.map((item) => item * 2); // newArr is [2, 4, 6]
console.log(newAray);

// filter() - Creates a new array with all elements that pass the test implemented by the provided function. 

let array3 = [1, 2, 3, 4, 5, 6, 7, 8];
let filterArray = array3.filter((item) => item % 2 === 0); 
console.log(filterArray);

// find() - Returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
let array4 = [1, 2, 0, 1, 2, 13, 4];
let found = arr.find((item) => item > 2);
console.log(found);

// findIndex() - Returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1.

let array5 = [1, 2, 1, 1, 0, 2, 3];
let index = arr.findIndex((item) => item > 2); 
console.log(index);

// reduce() - Executes a reducer function (that you provide) on each element of the array, resulting in a single output value. If a callback function is not provided, reduce will use the first element in the array as the initial value; if a callback is provided, you must provide an initial value.
// The reduce() method does not execute the function for array elements without values.
// The reduce() method does not change the original array.

let array6 = [1, 2, 3, 4, 5, 18, 11, 30, 31];
let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0); 
console.log(sum); // 105

// includes() - Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
// The includes() method is case sensitive.
// The includes() method returns true if the array contains the specified value, otherwise it returns false.

let array7 = [1, 2, 3, 4, 5, 65, 18];
let hasValue = arr.includes(18); 
console.log(hasValue); 

// indexOf() - Returns the first index at which a given element can be found in the array, or -1 if it is not present.
// The indexOf() method returns -1 if the value is not found.

let value = [1, 12, 31, 18, 30, 17, 11, 30, 12];
let indexOfValue = arr.indexOf(30);
console.log(indexOfValue); 

// join() - Joins all elements of an array into a string and returns this string, separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator. The join() method does not change the original array. The join() method returns a string, and not a string array.

let values = [1, 12, 30, 18, 31, 11, 30];
let str = arr.join('-');
console.log(str); // 1-12-30-18-31-11-30

// reverse() - Reverses an array in place. The first array element becomes the last, and the last array element becomes the first.

let arrValue = [1, 12, 30, 18, 31, 11, 30];
let newVlaueOfArray = arr.reverse(); 
console.log(newVlaueOfArray);

// sort() - Sorts the elements of an array in place and returns the sorted array. The default sort order is built upon converting the elements into strings and comparing their sequences of UTF-16 code unit values.

let fruit = ['banana', 'apple', 'date', 'cherry'];
fruit.sort();
console.log(fruit); // Output: ["apple", "banana", "cherry", "date"]


