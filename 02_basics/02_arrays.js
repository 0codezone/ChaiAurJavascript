const marvel_heros = ["ironman", "thor", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros); //["ironman", "thor", "spiderman", ["superman", "flash", "batman"]]

// const updated_marvel_heros = marvel_heros.concat(dc_heros)
// console.log(updated_marvel_heros); //["ironman", "thor", "spiderman", "superman", "flash", "batman"]

//using spread operator
// console.log([...marvel_heros, ...dc_heros]); //["ironman", "thor", "spiderman", "superman", "flash", "batman"]

// console.log(Array.isArray("mohit"))  //false
// console.log(Array.from("mohit"))  //["m", "o", "h", "i", "t"]
// console.log(Array.of("mohit"))  //["mohit"]

// console.log(Array.from({name: "mohit"}))  //***intresting***
// [] => empty array kyuki isko batana padega ki key ke hisab se jawab de ya value k hisab se           

// let score1 = 100
// let score2 = 200
// let score3 = 300
// console.log(Array.of(score1, score2, score3)); //[100, 200, 300]

