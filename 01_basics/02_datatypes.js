//DATATYPES AND ECMA STANDARDS : 

"use strict";  //treat all JS code as newer version, start me likha h mtlb complte file k liye use hoga

// alert(3 + 3); //alert is not defined here in codeSpace , kuyki we are using nodejs , not browser

console.log(3 + 3)  //6

//tc39.es and mdn  for documentation ------------


// -------------------------------Datatypes
let name = "mohit";
let age = 22
let isLoggedIn = false 

// -------------------------------primitive datatypes 
//number => 2 to power 53
//bigInt 
//string => ""
//boolean => true or false || 0 or 1
//null => standalone value empty
//undefined => jb varibe declare kre or value na de
//symbol => it is for uniqueness

const checkType = [name , age, isLoggedIn];
checkType.map((item)=>{
    console.log(typeof item) //[string, number , boolean]
})

// non premitive ---------- 
// object 


console.log(typeof "hitesh");  //string
console.log(typeof null); //objecet
console.log(typeof undefined)  //undefined


