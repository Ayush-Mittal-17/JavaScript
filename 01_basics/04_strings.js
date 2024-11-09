const name = "ayush"
const repoCount = 69

// console.log("Hello my name is " + name + " and my repo count is " + repoCount + ".");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}.`);

const gameName = new String('ayushm')

console.log(gameName[0]);
console.log(gameName[4]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('y'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-5, 4)
console.log(anotherString);

const newStringOne = "    ayush    "
console.log(newStringOne);
console.log(newStringOne.trim());