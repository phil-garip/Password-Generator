//Starting Data===========================================
var generateBtn = document.querySelector("#generate");
var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var abcUpperArr = abcUpper.split("");
var lowerCase = ["abcdefghijklmnopqrstuvwxyz"];
var abcLowerArr = abcLower.split("");
var numbers = ["0123456789"];
var numArr = numbers.split("");
var spCharacters = ["!@#$%^&*().,/?`~-+=[]{}"];
var spCharacterArr = spCharacters.split("");


// Dependencies ===========================================
  // generate button

// Functions ===============================================
  // generate password
  function generatePassword() {
    // get user choices (it's own function)
      // how long?
        //minimum of 8 characters maximum of 128 characters
          //say try again
        //store their choice
      // do you want uppercase letters? store their choice
      // do you want numbers? store their choice
      // do you want special characters? store their choice

    // combine chosen arrays into larger array (its own function)

    // randomly choose characters from the combined array and add them to a string called password
  
    // return a password
  
  }


// User Interractions ======================================
  // user clicks to generate password


























//Functions
var randomList = [];
function generatePassword() {
  //confirm spCharacters
  var confirmSpecial = confirm("Would you like special characters?")
  //add random special caharacter to list
  if (confirmSpecial === true) {
    randomList.charAt(Math.floor(Math.random() * randomList.length));
  }
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




