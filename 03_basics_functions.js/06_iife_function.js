// #  immidiatly invoke function expression (IIFE)

(function chai() { //ye ek name IIFE h (Chai name ka iife function)
    console.log("learing Iffe function with chai");
})();  //at last semicolon must hi lagana h taki dusra code run kre

(()=> {
    console.log("learing Iffe function with chai");
})();


((name)=> {
    console.log(`learing Iffe function with chai by ${name} sir`);
})("Hitesh");
