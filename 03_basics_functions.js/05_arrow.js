// const user = {
//     username : "mohit",
//     price : 33,

//     welcomeMessage : function () {
//         console.log(`welcome ${this.username} you have loggedin successfully`);   
//         console.log(this); //context ki baat krta h // (user object)
//     }
// }


// user.welcomeMessage //welcomeMessgae ek method h
// user.welcomeMessage() 
// user.username = "hitesh"
// user.welcomeMessage() 

// NOTE : toh humne curretn context  ko log krne ka bola h  islye  
//        change hote hi dikh ja rha jo change hua (this.username) => object k andr


// -------------------
// console.log(this); //empty {}  idhr empty kuki  node me kuch context ni milra
// if brwser me log krte h to => winow object ayeag



// -----------------------------------FUNCTION & this-----------------------------------------

// function chai() {
    //     console.log(this); 
// }
// chai()
// -------------------------------------
// function chai() {
//     let userkaname = "mohit"
// }    console.log(this.userkaname); //undefined => see idhr function k anser use kia h to iska context me functoin k
// //                                                andr ka kuch nhi aa rha h

// chai()

// -----------------------------
// const chai = function () {
//     const usernmae = "mohit"
//     console.log(this.usernmae);   //undefien  => this function me kaam nhi krta
// }
// chai()


// ---------------------------------------------------------------------------------
// -----------------------------------arrow-FUNCTION-----------------------------------------
// ---------------------------------------------------------------------------------
// const chai = () => {
//     const username = "mohit"
//     console.log(this); //{}
//     console.log(this.username); //undefined
// }

// const addition = (n1, n2) => {
//     return n1 + n2
// }

// const addition = (n1, n2) =>  n1 + n2;

// const addition = (n1, n2) =>  ( n1 + n2 );

// const addition = (n1, n2) =>  { username : "mohit"} //undefined

const addition = (n1, n2) =>  ( { username : "mohit"}); // {username : "mohit"}

console.log(addition(4,4));

