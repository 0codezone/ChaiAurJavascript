// ##Date and Time in Depth in javascript

// let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());        ****
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());

// exaple
// let myCreatedDate = new Date(2023, 0, 23);
// let myCreatedDate = new Date("01-14-2024");
// console.log(myCreatedDate);
// console.log(myCreatedDate.toDateString());



// -----------------------------------------------------------------
// let myDate = new Date()
// console.log(myDate.getDate());
// console.log(myDate.getDay());
// console.log(myDate.getFullYear());
// console.log(myDate.getHours());
// console.log(myDate.getMinutes());
// console.log(myDate.getMilliseconds());
// console.log(myDate.getSeconds());
// console.log(myDate.getMonth()); 


// example
// let myTimeStamps = Date.now()
// console.log(myTimeStamps);
// console.log(myCreatedDate.getTime());

// -------------------------------------------------------------------
 // intresting
const newDate = new Date()
newDate.toLocaleString('default', {
    weekday : "long"
})