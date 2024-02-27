// function f_name() {
//     console.log("m");
//     console.log("o");
//     console.log("h");
//     console.log("i");
//     console.log("t");
// }

// f_name() 

// -------------------------------

// function addtwonumber(num1, num2, num3) {
//     console.log("output:", num1+num2+num3);
// }
// addtwonumber(3,4,3) /10
// addtwonumber(3, 3, "4") //64
// addtwonumber(3,"a", 3) //3a3
// addtwonumber("a",3, 3) //a33
// addtwonumber(3,null,3) //3
// addtwonumber("3",null,3) //3null3
// addtwonumber(3,null,"3") //33

// ---------------------------------------------------------------**intresting
// function add(n1,n2) {
//     console.log(n1 + n2);
// }
// // add(n1, n2) //error not defiend 
// // add()  //NAN

// // add(5, 5) //10
// let result = add(5,5)
// console.log("result:" ,result); //undefiend => kuki retrun ni kia // sirf print kia h


// -----------------------------------solution for above => return **
function add(n1,n2) {
        return n1 + n2;
    }
   
// add(5,5) //to print this console kre
// console.log("upr return kia isliye idhr console krnake dekhna padega", add(5,5));

let result = add(5,5)
// console.log("result:" ,result); //10 => abhi undefined nhi ayega kuki ab humne return kia h.



// ---------------------------------------------------- expamples
// function userlogin(username) {
//     return `${username} just logged in`
// }

// userlogin("mohit")  
// console.log(userlogin("mohit")); //mohitjust logged in


// ---------------------------------------------------- expamples
// function userlogin(username) {
//     return `${username} just logged in`
// }

// console.log(userlogin());  //undefiedn

// ---------------------------------------------------- ex.
// function userlogin(username) {
//     if (username === undefined) {
//         console.log("pls enter username");
//     }
//     return `${username} just logged in`
// }
// console.log(userlogin());  

// ---------------------------------------------------- ex.
// function userlogin(username) {
//     if (!username) {
//         console.log("pls enter username");
//     }
//     return `${username} just logged in`
// }
// console.log(userlogin());  

// ---------------------------------------------------- 
// function userlogin(username) {
//     // if (!username) {
//     //     console.log("pls enter username");
//     //     return
//     // }

//     if (!username) {
//         return "pls enter username"
//     }
//     return `${username} just logged in`
// }

// console.log(userlogin());  


// ---------------------------------------------------- 
// function userlogin(username) {
//     if (!username) {
//         return "pls enter username"
//     }
//     return `${username} just logged in`
// }

// console.log(userlogin("mohit"));  


//humne itna pada to hum kaam krte agar kuch arg pass nhi krte to as a default GUEST loggin krde

// function userlogin(username = "GUEST") {
//         if (!username) {
//             return "pls enter username"
//         }
//         return `${username} just logged in`
//     }
    
// console.log(userlogin());

// ----------------------------------------------------  
function userlogin(username = "GUEST") {
        if (!username) {
            return "pls enter username"
        }
        return `${username} just logged in`
    }
    
console.log(userlogin("mohit"));  