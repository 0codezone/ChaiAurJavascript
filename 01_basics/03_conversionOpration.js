// let score = "23a";
// console.log(typeof score) //string

// let valueInNumber = Number(score)
// console.log(typeof valueInNumber) //number
// console.log(valueInNumber) // NaN  
// console.log(typeof NaN) //number   lochaa hai

// ----------------------------------------------------example 2
// let score = null;
// console.log(typeof score) //object

// let valueInNumbere = Number(score)  //coversion of score to number type
// console.log(typeof valueInNumbere) //number
// console.log(valueInNumbere) // 0


// ----------------------------------------------------example 2
let score = undefined;
console.log(typeof score) //undefined

let valueInNumbere = Number(score)  
console.log(typeof valueInNumbere) //number
console.log(valueInNumbere) //NaN


// "33" => 33
// "33abc" => Nan ( but typeof(NaN) is number)

// --------------------------------------------------------------------
// let isLoggedIn = 1;

// let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn)  //true
// console.log(typeof booleanIsLoggedIn)  //boolean


let isLoggedIn = "";

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn)  //false
console.log(typeof booleanIsLoggedIn)  //boolean


// 1 => true & 0 => false
// "" => false
// "mohit" => true


// ---------- -------- -------
let someNumber = 33

let stringSomeNumber = String(someNumber);
console.log(stringSomeNumber) //33
console.log(typeof stringSomeNumber) //string 