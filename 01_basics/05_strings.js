const name = "mohit"
const repoCount = 50

// console.log(name + repoCount);
// console.log(name + " " + repoCount);
// console.log(`Hello my name is ${name.toUpperCase()}, i have ${50} repository`);


const gameName = new String('mohit-game')  //string object
// console.log(gameName)
// console.log(gameName[0])
// console.log(gameName[5])
// console.log(gameName.length)
// console.log(gameName.__proto__)
// console.log(gameName.toUpperCase())
// console.log(gameName.bold())
// console.log(gameName.charAt(4))
// console.log(gameName.indexOf("t"))
// console.log(gameName.split("-")); // ["mohit", "game"]
// console.log(gameName.slice(0, 5)); //mohit
// console.log(gameName.slice(-8, 9)); //mohit

// const newgamename = gameName.substring(0, 5)
// console.log(newgamename);

// const valuee = new String("my name is mohit")
// const newSplitValue = valuee.split(" ")
// console.log(newSplitValue);  // ["my", "name", "is", "mohit"]
// newSplitValue.map((item) => {
//     console.log(item.toUpperCase()) 
// })

// -----------------------------------------------------
const value = new String("Hitesh Sir is Great!");

// // Access the length of the string
// console.log("Length of the string:", value.length);

// // Convert the string to uppercase
// console.log("Uppercase:", value.toUpperCase());

// // Convert the string to lowercase
// console.log("Lowercase:", value.toLowerCase());

// // Check if the string includes a specific substring
// console.log("Includes 'Great':", value.includes("Great"));

// // Find the index of a substring within the string
// console.log("Index of 'Sir':", value.indexOf("Sir"));

// // Replace part of the string with another substring
console.log("Replace 'Great' with 'Awesome':", value.replace("Great", "Awesome"));

// // Extract a part of the string (substring)
// console.log("Substring (7-12):", value.substring(7, 12)); //last include nhi hota h

// // Split the string into an array of substrings based on a delimiter
// console.log("Split by space:", value.split(" "));

// // Trim whitespace from the beginning and end of the string
console.log("Trimmed:", value.trim());

