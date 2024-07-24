// call 

function sayHello(val1, val2, val3) {
    console.log(this.name, val1, val2, val3);
  }
  
  const person = { name: 'Diksha' };
  sayHello.call(person, 1, 2, 3); 


// apply

function introduce(age, city) {
    console.log(`My name is ${this.name}, age: ${age}, city: ${city}.`);
  }
  
  const person1 = { name: 'Diksha' };
  introduce.apply(person1, [25, 'Mumbai']); 


// bind

function greet(greeting) {
    console.log(`${greeting}, my name is ${this.name}.`);
  }
  
  const person2 = { name: 'Diksha' };
  const greetDiksha = greet.bind(person2, 'Hello');
  greetDiksha();
  
  
  