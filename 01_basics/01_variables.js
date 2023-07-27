const accountId = 144556
let accountEmail = "dhar2017@gmail.com"
var acccountPassword = "12345"
accountCity = "Siliguri"
let accountState;

// accountId = 21   - not allowed

accountEmail = "dd@outlook.com"
acccountPassword = "3345"
accountCity = "Jaipur"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, acccountPassword, accountCity, accountState])