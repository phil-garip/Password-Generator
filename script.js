//Starting Data
var generateBtn = document.querySelector("#generate");
var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var abcUpperArr = abcUpper.split("");
var lowerCase = ["abcdefghijklmnopqrstuvwxyz"];
var abcLowerArr = abcLower.split("");
var numbers = ["0123456789"];
var numArr = numbers.split("");
var spCharacters = ["!@#$%^&*().,/?`~-+=[]{}"];
var spCharacterArr = spCharacters.split("");



//Functions
function generatePassword() {
  return password;
}



// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//User Interractions
//a user clicks generate password
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Initializations



// Assignment Code

var generateBtn = document.querySelector("#generate");




