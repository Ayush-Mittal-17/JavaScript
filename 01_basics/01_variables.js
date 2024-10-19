const accountId = 112269;
let accountEmail = "ayush@gmail.com";
var accountPassword = "962211";
accountCity = "Jaipur";
let accountState;

// accountId = 112270; not allowed to change the value of const variable


/*
prefer not to use var because of issue in block scope and fuctional scope.
*/

accountEmail = "mittal@gmail.com";

accountPassword = "072211";

accountCity = "Bengaluru"

console.table([accountId, accountPassword, accountCity, accountState]);