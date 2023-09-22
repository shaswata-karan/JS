const accountID = 9836971416
let accountEmail = "shaswatakaran2016@gmail.com"
var accountPassword = "12345"
accountCity = "Kolkata"
let accountState;

// accountID = 2
// not allowed

accountEmail = "abc@gmail.com"
accountPassword = "54321"
accountCity = "Kolkata"

// Prefer not to use var
// because of issue in block scope and function scope

console.log(accountID);
console.table([accountID, accountEmail, accountPassword, accountCity, accountState])