// # Arrays in javascript

// const myArr =  [0,1,2,3,4,5,6]
// const myArr2 = ["mohit", "is" , "my", "name"]
// const myArr3 = [true,false]


//Arrays method-----------------------------------------------------

const Arr = [1,2,3,4,5]

// Arr.push(6)  // push 6 at last of array
// Arr.push(7)  // push 7 at last of array
// Arr.pop()  // remove last elemnt of array

// Arr.unshift(9) //add elemnt to start of array
// Arr.shift() //remove starting element of array

// console.log(Arr);
// console.log(Arr.includes(9));  //false  => arrays me 9 hai ya nhi
// console.log(Arr.includes(5));  //true

// console.log(Arr.indexOf(5));  // 5 prenst at index-4 of arrray
// console.log(Arr.indexOf(9)); // -1 mtlb prenst hi nhi h array me

const newArr = Arr.join()

// console.log(Arr);   // [1,2,3,4,5]
// console.log(newArr); 1,2,3,4,5

// console.log(typeof Arr);  //object
// console.log(typeof newArr);  //string

//slice, splice
// (1, 3) => 1,2,3
// slice //do not include 3 => 1,2
// splice //do include 3 also => 1,2,3 => or inko original array me se delet ekr deta h


console.log("Original Array", Arr);

const sliceArr = Arr.slice(1,3)
console.log("slice", sliceArr);
console.log("original arrays After Slice ", Arr);


const spliceArr = Arr.splice(1,3)
console.log("splice", spliceArr);
console.log("original arrays After Splice ", Arr);