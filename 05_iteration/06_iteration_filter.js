// ---------------------------------------------------------------------------------------------------
// -------------------------+++++++++ map , filter and reduce ++++++++---------------------------------
// ----------------------------------- ye sb Return krte hai----------------------------------------

// ## filter **********************************

// const packet = [1,23,4,5,6,78,8]
// const result = packet.filter((num) => num > 4)
// console.log(result);
// console.log(typeof result); //object

// ****************************
// const result = []
// packet.forEach((num)=>{
//     if(num > 4){
//         result.push(num)
//     }
// })
// console.log(result);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBooks);


