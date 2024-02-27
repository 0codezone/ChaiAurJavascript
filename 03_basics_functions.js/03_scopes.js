
// #  learning locla and global scopes 

//////////////////////////////////////+++++++++++ using const ++++++++++//////////////////////////

// if (true) {
//     const a = 4;
//     console.log("inside",a);
// }
// console.log("outside",a); // error not defiend
// ------------------------------------------------------------
// const a = 4;
// if (true) {
//     console.log("inside",a);
// }
// console.log("outside",a); // error not defiend
// ----------------------------------------------------------------
// if (true) {
//     console.log("inside",a); //cannot access a before initialise
// }
// const a = 4;
// console.log("outside",a); // error not defiend













//////////////////////////////////////+++++++++++ using let ++++++++++//////////////////////////
// if (true) {
//     let a = 4;
//     console.log("in scope",a);  //4
// }
// console.log("outsdide scope", a); // error comes that a is not defined kuki a local scope me h

// --------------------------------------------------------------------------
// let a = 4;
// if (true) {
//     console.log("in scope",a);  //4
// }
// console.log("outsdide scope", a); //4 => abhi print hua kuki a global scope me h

// --------------------------------------------------------------------------
// if (true) {
    //         console.log("in scope",a);  //cannot acces a before initialise
    //     }
    
    // let a = 4;
    // console.log("outsdide scope", a); //4 => abhi print hua kuki a global scope me h
    
    
// --------------------------------------------------------------------------
// let a = 400;
// if (true) {
//     let a = 4
//     console.log("inner ",a); //this will print it sscope value // 4
// }
// console.log("outer ",a);  // 400












//////////////////////////////////////+++++++++++ using Var ++++++++++//////////////////////////
// if (true) {
//     var a = 4;
//     console.log(" insede scope using var",a);
// }
// console.log("outside scope using var",a);

// --------------------------------------------------------------------------
// var a = 4;
// if (true) {
//     console.log(" insede scope using var",a);
// }
// console.log("outside scope using var",a);

// --------------------------------------------------------------------------
// if (true) {
//     console.log(" insede scope using var",a); // shows undefined=>
// }
// var a = 4;
// console.log("outside scope using var",a); //4

// --------------------------------------------------------------------------
// var a = 40;
// if (true) {
//     a = 4;
//     console.log(" insede scope using var",a); // 4
// }
// console.log("outside scope using var",a); //4 gloabal 40 h fir bhi 4 print kr dia  scope ka kuch h hi ni VAR me