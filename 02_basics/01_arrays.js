const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = ["iron man", "thor", "captain amaerica", "loki", "hulk"]

const myArr2 = new Array(1, 2, 3, 4, 5)

// console.log(myHeroes[3]);

// console.log(myArr);

// myArr.push(6)
// myArr.push(8)
// myArr.pop()
// console.log(myArr);

// myArr.unshift(8, 9)
// myArr.shift()
// console.log(myArr);

const newArr = myArr.join()    // Converts The Elements Of Array In Form Of A String.

// console.log(myArr);
// console.log(newArr);

// SLICE AND SPLICE DIFFERENCE    **IMPORTANT

// console.log("A ", myArr);

// const myNewArr1 = myArr.slice(1, 3)
// console.log(myNewArr1);

// console.log("B ", myArr);

// const myNewArr2 = myArr.splice(1, 3)
// console.log(myNewArr2);
// console.log("C", myArr);

const marvelHeroes = ["ironman", "spiderman", "hulk"]
const dcHeroes = ["superman", "flash", "batman"]
// marvelHeroes.push(dcHeroes)

// const allHeroes = marvelHeroes.concat(dcHeroes)             // Concat Operator To Join Arrays
// console.log(allHeroes);

// const allNewHeroes = [...marvelHeroes, ...dcHeroes]         // Spread Operator To Join Arrays
// console.log(allNewHeroes);

console.log(Array.from("Ayush"));

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));