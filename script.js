//Starting Data===========================================
var generateBtn = document.querySelector("#generate");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var abcUpperArr = upperCase.split("")
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var abcLowerArr = lowerCase.split("");
var numbers = "0123456789";
var numArr = numbers.split("");
var spCharacters = "!@#$%^&*().,/?`~-+=[]{}";
var spCharacterArr = spCharacters.split("");

// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var userArray = [];
  var pwArray = [];
  var pwLength = 0;
  
    var userLength = prompt("How many characters? Please enter a number between 8 and 128");
    if (userLength > 7 && userLength < 129) {
      pwLength = userLength
    } else {
      alert("Invalid number. Please try again.")
      getUserLength();
    }
  
    var userUpper = confirm("Would you like uppercase letters?");
    console.log()
    if (userUpper) {
    userArray = userArray.concat(abcUpperArr);
    } 
  
    var userLower = confirm("Would you like lowercase letters?");
    if (userLower) {
      userArray = userArray.concat(abcLowerArr);
    } 
  
    var userNums = confirm("Would you like numbers?");
    if (userNums) {
      userArray = userArray.concat(numArr);
    } 

    var userSpecial = confirm("Would you like special characters?");
    if (userSpecial) {
      userArray = userArray.concat(spCharacterArr);
    }

  for (var i = 0; i < pwLength; i++) {
    pwArray.push(userArray[Math.floor(Math.random() * userArray.length)]);
  }
  return pwArray.join("");
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// User Interactions =================================================
// a user clicks generate password
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Initialization ====================================================

generatePassword();