/*/////
  Part 1
/////*/

// Step 0
// alert('Hello Wolrd');
console.log('Hello Wolrd');
console
  .log
  ('Olá Mundo');

/* 
  Long
  Comments
*/

// Step 1

console.log('hello Mr. John');
console.log('hello Mr. Mike');
console.log('hello Mr. Walker');
console.log('hello Mr. Bob');
console.log('hello Mr. Koji');

// Step 2

let name;

name = 'John';
console.log('hello Mr. ' + name);

name = 'Mike';
console.log('hello Mr. ' + name);


// Step 3

name = 'John';
console.log('Hello, Mr. ' + name); // correction

name = 'Mike';
console.log('Hello, Mr. ' + name); // correction


// Step 4

sayHello('John');
sayHello('Mike');

function sayHello(n){
  // Intent inside block to increase the readability.
  console.log('Hello, Mr. ' + n);
}



/*/////
  Part 2
  Let's understand more about JavaScritp variables.
/////*/

/*
Declarations

var / let / const

*/

/* 
Primitive Types:
- Numer    = 3 / 3.14
- Boolean  = true/false
- String   = 'Hello', '3', '3.14' is same as "Hello", "3", "3.14"
- null
- undefined
- Symbol(new in ES6)
*/

console.log('11' - 2);    // returns 30, Number
console.log('11' + 2);    // returns "112", String
console.log(+'11' + 2);   // returns 13, Number
console.log('11' + true); // returns 11true, String
console.log('11' - true); // returns 10, Number

console.log(11 + 2);     // returns 13,  Number
console.log(11 + '2');   // returns 112,  String
console.log(11 + +'2');   // returns 13,  String
console.log(11 - 2);     // returns -2,  Number
console.log(11 - '2');   // returns -2,  Number
console.log(11 - 'x');   // returns NaN, Number

console.log('11' + 'x');   // returns 11x, String
console.log('11' - 'x');   // returns NaN, Number



