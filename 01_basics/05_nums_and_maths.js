// const score = 400
// console.log(score);

// const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

// const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(4));

// const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));



//==========  MATHS  ==========

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 8, 12, 6, 3));
// console.log(Math.max(3, 8, 12, 4, 1));

console.log(Math.random()); // generates a number between 0 and 1
console.log((Math.random()*10) + 1);
console.log(Math.floor((Math.random()*10) + 1));

//========== short trick to generate any number between two numbers ==========

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);