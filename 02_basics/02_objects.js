const mySym = Symbol("key1")                // declaration of a symbol

const jsUser = {
    name: "Ayush",
    "full name": "Ayush Mittal",
    [mySym]: "myKey1",
    age: 18,
    location: "Delhi",
    email: "ayush@gmail.com",
    isLoggedIn: "false",
    lastLoginDays: ["Monday", "Wednesday", "Thursday"]
}

// console.log(jsUser.name);                   // used to print any key value from the object
// console.log(jsUser["lastLoginDays"]);       // better way to print key value from the object 
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

jsUser.email = "ayush@microsoft.com"        // to change the value of a key
// Object.freeze(jsUser)                       // freezes the keys of the object so that key values cannot be changed anymore
// jsUser.email = "ayush@amazon.com"
// console.log(jsUser);

jsUser.greetings = function(){
    console.log("Hello JS User");
}

jsUser.greetingsTwo = function(){
    console.log('Hello JS User, ${this.name}');
}
console.log(jsUser.greetings());
console.log(jsUser.greetingsTwo());