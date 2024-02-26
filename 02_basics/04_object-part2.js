const tinderUser = new Object();  

tinderUser.id = "123qwe"
tinderUser.name = "jitesh"
tinderUser.isLogedin = true

// console.log(tinderUser);

// const regularUser = {
//     email : "mohit@google.com",
//     fullname : {
//         firstname : "mohit",
//         lastname : "darji"
//     }
// }

// console.log(regularUser);
// console.log(regularUser.fullname);
// console.log(regularUser["fullname"]);
// console.log(regularUser.fullnam?.firstname); //undefined => not thrvow error kuki optional chain use kia h
// console.log(regularUser["fullname"]["firstname"]);

// also there is something like optiional chaining  => ?


// ------------------------------------------------------------------//***** */
const obj1 = {
    1 : "a",
    2:  "b",
    3 : "c"
}

const obj2 = {
    4 : "f",
    5:  "g",
    6 : "h"
}

// console.log({...obj1, ...obj2}  );  //using spread oprator

// const newObj = Object.assign(obj1, obj2)
// console.log(newObj);

const users = [
    {
        id : "1",
        name  : "mohit"
    },
    {
        id : "1",
        name  : "ohit"
    },
    {
        id : "1",
        name  : "mohit"
    }
]

// console.log(users[1].name); //ohit 


// console.log(Object.keys(tinderUser)); // gives keys of object in ARRAY form
// console.log(Object.values(tinderUser)); 
console.log(Object.entries(tinderUser));  //elemnt ko array me badal kr ek array bag me bhr deta h




