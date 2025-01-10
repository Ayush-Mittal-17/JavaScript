function addTwoNumbers(number1, number2){
    let result = number1+ number2
    return result
    console.log("Hello!");   // return ke baad function ke andar koi bhi line execute nhi hogi
    
}

const result = addTwoNumbers(26, 28)
// console.log("result:", result);

function loginUserMessage(username){
    if(username === undefined){
        console.log("please enter a username!");
        return
    }
    return `${username} just logged in.`
}
// console.log(loginUserMessage("ayush"));    //parameters mei kuch na ho toh undefined print hota hai isliye if wali condition lga do

function calculateCartPrice(...num1){         // here ...num1 acts as a rest operator which converts the parameters into array
    return num1
}
// console.log(calculateCartPrice(200, 400, 700));


// Passing The Objects Into Functions

const user = {
    username: "ayush",
    price: 299
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)


// Passing The Array Into Functions

const myNewArray = [100, 300, 600, 700]

function handleArray(anyArray){
    return anyArray[2]
}

console.log(handleArray(myNewArray));