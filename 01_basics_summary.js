//# summary 

// ##  primitive datatypes : 7
/*
 1) String
 2) Number
 3) Boolean 
 4) null  (khaali)
 5) Symbol 
 6) undefined 
 7) bigInt
 */
 
// JavaScript is a dynamically typed language. This means that the type of a variable is determined at runtime, based on the value assigned to it. There's no explicit declaration of types like you might find in statically typed languages.

// const score = 100
// const scoreValue = 100.4
// const isLoggedIn  = false
// const outSideTemo = null 
// let userEmail; 

// Symbol  ==> unique
// const id = Symbol('123')
// const anotherid = Symbol('123')
// console.log(id == anotherid); //false
// console.log(id === anotherid); //false




// ----------------------------------------------------------------------------------------------------
// ## refrence (non-primitive datatypes)
/*
1) Arrays
2) Objects
3) Functions
 */


// -----------------------------------------------------------
// Learn Datatypes

// #primitive Datatypes
console.log(typeof NaN);  // "number"

console.log(typeof 42);         // "number"
console.log(typeof "Hello");    // "string"
console.log(typeof true);       // "boolean"
console.log(typeof undefined);  // "undefined"
console.log(typeof null);       // "object"
var sym = Symbol("foo");
console.log(typeof sym);  // "symbol"

var x;
console.log(typeof x);  // "undefined"
console.log(typeof y);  // "undefined"

var result = 10 / "apple";
console.log(typeof result);  // "number"




//# function => function
function foo() {}
console.log(typeof foo);  // "function"


//#object => object
var obj = { name: "John", age: 30 };
console.log(typeof obj);  // "object"


// #Array => Object
var arr = [1, 2, 3];
console.log(typeof arr);  // "object"


//#date => object
var date = new Date();
console.log(typeof date);  // "object"


// ----------------------------------------------------------------
// ##stack(primitve datatypes) and heap(non-primitive)Memory in javascript
// 1) jb bh stack memory use hoti to uska matlb jb bhi apne variable declare kia uska apko copy milta h
// 2) or jb bhi heap memory use hoti h to apko original value ka refrence milta h

// example 
// let myYotubeName = "0codeZone"
// let anotherName = myYotubeName;

// anotherName = "chaiorcode"
// console.log(myYotubeName);  // codeZone
// console.log(anotherName);  //  chaiorcode => ye change hua kyuki myyoutube original value nhi dia tha COPY dia tha 

let userOne = {   // now this is non-primitive so heap me jayega 
    email : "user@gmail.com",
    upi : "user@ybl"
}
let userTwo = userOne;

userTwo.email = "user2@gmail.com"

console.log(userOne); //{email : "user2@gmail.com"}  //it is bcox heap memory
console.log(userTwo); //{email : "user2@gmail.com"}  