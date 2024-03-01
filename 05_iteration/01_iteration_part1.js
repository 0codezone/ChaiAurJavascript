// for 
// let array = [1,2,3,4,5,5,6]
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     console.log(element);
// }

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (element == 5) {
//         console.log("5 is best number");
//     }
//     console.log(element);
// }


// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (element == 5) {
//         console.log("5 is best number");
//     }else{
//         console.log(element);
//     }
// }

// for (let i = 0; i <=10 ; i++) {
//     console.log(`outer loop  i = ${i}`);
//     for (let j = 0; j <= 10; j++) {
//          console.log(`outer loop i = ${i} and inner loop j = ${j}`);
//     }
    
// }  //1 outer 10 inner


//------------------------------intresting *****
// for (let i = 0; i <=10 ; i++) {
//     console.log(`outer loop  i = ${i}`);
//     for (let j = i; j <= i; j++) {
//          console.log(`outer loop i= ${i} and inner loop j = ${j}`);
//     }
    
// }  //1 outer 1 inner


//------------------------------intresting *****
// for (let i = 0; i <=10 ; i++) {
//     console.log(`outer loop  i = ${i}`);
//     for (let j = 0; j <= i; j++) {
//          console.log(`outer loop i = ${i} and inner loop j = ${j}`);
//     }
    
// }  //like => i-1 toh j-0,j-1 || i-2 to j-0,j-1,j-2 

// -------------------------intresting print all tables from 1 to 10

// for (let i = 1; i <=10; i++) {
//     console.log(`Table of ${i}`);
//     for (let j = 0; j <= 10; j++) {
//         console.log( `${i} * ${j} = ${i*j}` );
//     }
// }  / lo 1 se 10 tk ka table



// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
// ##----------------------for loop-------------Branching  (break, continue):

// for (let i = 1; i <= 10; i++) {
//     if (i == 5) {
//         console.log("detected 5");
//         break
//     }
// console.log(`value of i is ${i}`);
    
// }

// for (let i = 0; i < 5; i++) {
//     if (i === 3) {
//         break; // stop the loop when i equals 3
//     }
//     console.log(i);
// }

// for (let i = 0; i < 5; i++) {
//     if (i === 3) {
//         continue; // skip the iteration when i equals 3
//     }
//     console.log(i);
// }