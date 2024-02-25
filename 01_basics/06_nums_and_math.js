const score = 400;
// console.log(score);

const balance = new Number(101.793) 
// console.log(balance.toString()); //101.793
// console.log(balance.toFixed(2)); //101.79
// console.log(balance.toPrecision(4)); //101.8


const hundreds = 1000000
// console.log(hundreds.toLocaleString()); //1,000,000
// console.log(hundreds.toLocaleString('en-IN')); //10,00,000


// ----------------------------------------------------------Maths------------------------------------

// console.log(Math);  //check it in console browser
// console.log(Math.abs(-4)); //absolute value => (4) mtlb minus value positive o jati h bbsss
// console.log(Math.round(4.3)); // 4
// console.log(Math.ceil(4.2)); //5
// console.log(Math.floor(4.2)); //4
// console.log(Math.min(6,3,7,8,9,4,2,1)); //1
// console.log(Math.max(6,3,7,8,9,4,2,1)); //9


// console.log(Math.random()); // 0-1
// console.log(Math.floor(Math.random())); // 0
// console.log(Math.random()*10); // 0-10 any
// console.log(Math.floor(Math.random()*10)); //0-9 integer
// console.log(Math.floor((Math.random()*10)+1)); //1-10  minimum1


const min = 10
const max = 20

// const value = Math.random() 
// console.log(value); // 0-1 => 0.01 - 0.99 | (let assume value -> 0.4)

// const result = (value * (max-min + 1))
// console.log(result); // 0.4 * 11 => 4.4

// const finalResult = Math.floor(result)
// console.log(finalResult);  //4.4 => 4

// const mainfinalResult = ( finalResult + min)
// console.log(mainfinalResult);  //4+10 => 14
// or 
console.log(Math.floor(Math.random()* (max-min + 1))+ min)  //(10-20)


