
signs = true;
integers = false;
capitalChar = true;
var pswd = "abcdefghijklmnreopqrstuvwxyz";
passwordString = ""
var numbers = "1234567890";
var special = "~!@#$%^&*()_+-=`";
var capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var chars = "abcdefghijklmnreopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ~!@#$%^&*()_+-=`1234567890";
function genPassword() {

    var passwordLength = 12;
    var password = "";
    for (var i = 0; i <= passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
    }
    console.log(password)
}
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
position = Array.from({length: 4}, () => Math.floor(Math.random() * 4));

function getPswrd(signs, integers, capitalChar) {
    if (integers == true && signs == false && capitalChar == false) {
        passwordString = pswd.concat(numbers);
    } else if (signs == true && integers == false && capitalChar == false) {
        passwordString = pswd.concat(special);
    } else if (capitalChar == true && integers == false && signs == false) {
        passwordString = pswd.concat(capital);
    } else if (capitalChar == true && integers == true && signs == false) {
        passwordString = pswd.concat(capital, numbers)
    } else if (signs == true && integers == true && capitalChar == false) {
        passwordString = pswd.concat(numbers, special)
    } else if (signs == true && capitalChar == true && integers == false) {
        passwordString = pswd.concat(special, capital)
    }else if (signs == true && capitalChar == true && integers == true) {
        passwordString = pswd.concat(special, numbers, capital)
    } else {
        passwordString = chars;
    }
    var passwordLength = 12;
    var password = "";
    for (var i = 0; i <= passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * passwordString.length);
        password += passwordString.substring(randomNumber, randomNumber + 1);
    }
    console.log(passwordString)
    console.log(password)

}
getPswrd(true, false, false)