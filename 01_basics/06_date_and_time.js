// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

// let myCreatedDate = new Date(2025, 0, 5)               // To Create A Custom Date
// console.log(myCreatedDate.toDateString());

let myCreatedDate = new Date(2025, 0, 5, 15, 43, 12)   // To Create A Custom Date With Time
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);                              // Time In Milliseconds
console.log(myCreatedDate.getTime());