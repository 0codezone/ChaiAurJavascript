// ## DataTypes conversion confusion
// -----------------------------------------------------------------example 1
// let score = "23a";
// console.log(typeof score) //string

// let valueInNumber = Number(score)
// console.log(typeof valueInNumber) //number
// console.log(valueInNumber) // NaN  
// console.log(typeof NaN) //number   lochaa hai

// -----------------------------------------------------------------example 2
// let score = null;
// console.log(typeof score) //object

// let valueInNumbere = Number(score)  //coversion of score to number type
// console.log(typeof valueInNumbere) //number
// console.log(valueInNumbere) // 0


// -----------------------------------------------------------------example 3
// let score = undefined;
// console.log(typeof score) //undefined

// let valueInNumbere = Number(score)  
// console.log(typeof valueInNumbere) //number
// console.log(valueInNumbere) //NaN

//--------------------NOTES
// "33" => 33
// "33abc" => Nan ( but typeof(NaN) is number)

// --------------------------------------------------------------------exmple 4
// let isLoggedIn = 1;

// let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn)  //true
// console.log(typeof booleanIsLoggedIn)  //boolean


// --------------------------------------------------------------------exmple 5
// let isLoggedIn = "";

// let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn)  //false
// console.log(typeof booleanIsLoggedIn)  //boolean

//---------------------NOTES
// 1 => true & 0 => false
// "" => false
// "mohit" => true


// --------------------------------------------------------------------exmple 6
// let someNumber = 33

// let stringSomeNumber = String(someNumber);
// console.log(stringSomeNumber) //33
// console.log(typeof stringSomeNumber) //string 


// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------
// # why String to number conversion is confusing : 
// # OPERATION
// -----------------------------------------------exampel a
let value = 3;
let negValue = -value
// console.log(negValue)

// -----------------------------------------------exampel b
// console.log(2 + 2); //4
// console.log(2 - 2);  //0
// console.log(2 * 3);  //6
// console.log(2 ** 3);  //8
// console.log(2 / 2);  //1
// console.log(2 % 3);  //2

// ---------------------------------------------------------example c 
// let str1 = "mohit"
// let str2 = "darji"
// console.log(str1 + str2); // mohitdarji
// console.log(str1 + " " + str2); // mohit darji

// ---------------------------------------------------------example d 
// console.log(str1 - str2); NaN

// ---------------------------------------------------------example E *
// console.log("1" +  "2"); //12
// console.log(1 +  "2"); //12
// console.log("1" +  2); //12
// console.log("1" +  2 + 2); //12  => ("1"+2)+2 => "12"+2 ==> 122
// console.log(1 +  2 + "2"); //12  => (1+2)+"2" => 3+"2" ==> 32

// ---------------------------------------------------------example F *
// console.log(true); //true
// console.log(+true); //1

// // console.log(true+); //error

// console.log("") //false 
// console.log(+"") //0 

// ----------------------------------------------------------exmaple G
// let num1, num2, num3;
// num1 = num2 = num3 = 2 + 2


// ----------------------------------------------------------exmaple H **
// let gameCounter = 100
// gameCounter++
// console.log(gameCounter); //101
// gameCounter--
// console.log(gameCounter); //100

// ----------------------------------------------------------exmaple i **
// let x = 3
// let y = x++
// console.log(x); //4
// console.log(y); //3

// ----------------------------------------------------------exmaple j **
let x = 3
let y = ++x
console.log(x); //4
console.log(y); //4












