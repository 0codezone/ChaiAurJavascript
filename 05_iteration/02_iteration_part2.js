// ## ------------------------------ Loops (for, while, do...while):
// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }


// let i = 0;
// while (i < 5) {
//     console.log(i);
//     i++;
// }


// let i = 0;
// do {
//     console.log(i);
//     i++;
// } while (i < 5);


// ----------+++++++++++++++++++++------------------------++++++++++++++++--------------------
// -----------------------------  Higher order array loops -----------------------------------

// for of

// ["","",""]
// [{},{},{}]

// const bag = [1,2,3,4,5,6]
// for(const item of bag){
//     console.log(item);
// }

// const greetings = "Hello World!"
// for (const greet of greetings) {
//     console.log(`each character of greetings is ${greet}`);
// }

// --------------------------------------
//Map
// const map = new Map()
// map.set('IN' , "India")
// map.set('US' , "United State")
// map.set('Fr' , "France")
// map.set('IN' , "India")

// console.log(map);  //duplicate value ko ignore bhi kr deta h

// for (const i of map) {
//     console.log(i);
// }

// for (const [key] of map) {
//     console.log(key);
// }

// for (const [key, value] of map) {
//     console.log(`${key} : ${value}`);
// }

// -------------------------------------- for of se  object iterabke nhi hote
// const object = {
//     "one" : 1,
//     "two" : 2,
//     "three" : 3,
//     "four" : 4
// }

// for (const [key, value] of object) {
// console.log(`${key} : ${value}`);
// }

// ----------------------------------------------------------------------------------------