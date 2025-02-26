// var c = 300
let a = 300
if(true){
    let a=10
    const b=20
    //var c=30
    console.log("inner:", a);
}
console.log(a);
//console.log(c);     // {} yeh wale brackets ko scope bolte hain aur koi bhi value scopes se bahar nhi jaani chahiye lekin var ki value bahar chali jati hai jo baad mei code mei dikkat de sakti hai isliye hum var ko use nhi karte


// function ke andar function

function one(){
    const username = "ayush"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);    yeh line execute nhi hogi kyunki global scope block scope ki value nhi le sakta lekin block scope global scope ki value le sakta hai isliye username wala part print ho jaega lekin website wala nhi

    two()
}
one()



if(true){
    const username = "ayush"
    if(username==="ayush"){
        const website=" youtube"
        console.log(username + website);
    }
    // console.log(website);        yeh line run nhi hogi, error degi because of same above reason
}
// console.log(username);           yeh line run nhi hogi, error degi because of same above reason
