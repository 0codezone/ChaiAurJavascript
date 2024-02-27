// #functions with object and array

// function calculateCartPrice(num1) {
//     return num1;
// }
// console.log(calculateCartPrice(2));

// --------------------------------------------------
// function calculateCartPrice(...num1) { //rest operator => khule samsan ko bag me bhrke deta h
//     return num1; 
// }

// console.log(calculateCartPrice(200, 300, 400,500,500));


// --------------------------------------------------
// function calculateCartPrice(val1, val2, ...num1) { //rest operator => khule samsan ko bag me bhrke deta h
//     return num1; 
// }

// console.log(calculateCartPrice(200, 300, 400,500,500));

// ----------------------------------------------------------------------function with object 
// const user = {
//     username : "mohit",
//     age  : 22
// }

// function handleObjecet(anyObject) {
//     return `usernmae ${anyObject.username} and age is ${anyObject.age}`
// }

// console.log(handleObjecet()); //error arg pass nhi kia so
// console.log(handleObjecet()); //pass args as user aribale which defiend above

// --------------------------------------------------------------------------function with array

const user = ["ram", "shyam"];
function handleArray(anyArray) {
    return `user1 ${anyArray[0]} and user2 ${anyArray[1]} and user3 ${anyArray[2]}}`
}

console.log(handleArray(user));