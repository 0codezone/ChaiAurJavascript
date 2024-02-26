// singleton 
// Object.create()  cosntrctor method


// object Literals
let user = {
    name : "mohit",
    "full name" : "Mohit Darji",
    age : 24,
    isAdmin : true,
    lastLoggedIn : ["monday", "saturday"]
}

// console.log(user.name);
// console.log(user["name"]);

// console.log(user["full name"]); // bich me space h to yhi trike se log kr skte h  **

// console.log(user.age = 23);
// console.log(user["age"]);

// Object.freeze(user) //ye laga to iske bad tum object me kuch change nhi kar skte

user.greeting = function (){
    console.log("helio user");
}
user.greetingTwo = function (){
    console.log(`helio mere bhai ${this.name}`);  // ****intersting "this" ****
}
// console.log(user);
// console.log(user.greeting); //anonymous function
console.log(user.greeting());  //helio user and undefiened
user.greeting() //helio user
user.greetingTwo() //helio mere bhai mohit




// ---------------------------------------------------------example for symbole--------

// Creating a symbol
// const mySymbol = Symbol('mySymbol');

// const myObject = {
//   name: 'John',
//   age: 30,
//   [mySymbol]: 'This is a symbol property'
// };

// console.log(myObject);
// console.log(myObject[mySymbol]); // Output: This is a symbol property
// console.log( typeof myObject[mySymbol]);  //string

// Symbols are unique and are not implicitly converted to strings when used as property keys.



