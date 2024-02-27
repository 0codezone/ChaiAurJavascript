/*
function one() {
    const username = "mohit";
    
    function two() {
        const website = "codezone"
        console.log(username); // ye to "mohit" outpt de dega kuki  username to uske liye global hi h
    }
    
    console.log(website); // erroe dega kuki website to functionTWO ka locl h to uske bahar ni chlega
    
    two();
}
one()

*/


// -------------------------------------------------------------------------------------
/* 
if (true) {
    const username = "mohit"
    
    if (username === "mohit") {
        const website = " youtube"
        // console.log(username + website); // mohit youtube
    }
    // console.log(website); //not defiend in its scope
}
// console.log(username); //not defiend in its scope

*/

// -------------------------------+++++++ mini HOISTING  ++++++++++------------------------------
// -------**********-------------******** intresting *********--------******-------------
// console.log(addOne(5)); //6
// function addOne(num) {
    //     return num + 1;
    // }
    // console.log(addOne(5)); //6
    
    // NOTE : MTLN FUNCTION SIRF DECLARE KRE TO USE KNHE BHI CALL KRS KTE H KAAM KREGA
    
    
// -------**********-------------******** intresting *********--------******-------------
// console.log(addTwo(5)); // conot accesss "addTwo" before initialization
// const addTwo = function(num) {
//     return num + 2
// }
// console.log(addTwo(5)); //7 

   // NOTE : idhr aisa scene h ki function declare bhi kia or use variable me hold bhi karaya h so 
   //        ye sirf  after call hoge funcition delclreation ke phle ni 