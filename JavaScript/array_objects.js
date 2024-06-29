// Array

let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[2]); 
console.log(fruits.length); 
fruits.push("Grapes"); 
console.log(fruits); 



// Objects

let person = {
    firstName: "Hello",
    lastName: "World",
    age: 22,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};
console.log(person.firstName); 
console.log(person["lastName"]); 
console.log(person.fullName()); 
console.log(person.age);
