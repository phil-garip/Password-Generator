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
var userArray = [];
var pwArray = [];
var pwLength = 0;

// Dependencies ===========================================
  // generate button

// Functions ===============================================
  // generate password
  
  function getUserLength() {
    var userLength = prompt("how many characters? Please enter a number between 8 and 128");
    if (userLength > 7 && userLength < 129) {
      pwLength = userLength
    } else {
      alert("Invalid number. Please try again.")
      getUserLength();
    }
  }

  function getUserUpper() {
    var userUpper = confirm("Would you like uppercase letters?");
    console.log()
    if (userUpper) {
    userArray = userArray.concat(abcUpperArr);
    } 
  }

  function getUserLower() {
    var userLower = confirm("would you like lowercase letters?");
    if (userLower) {
      userArray = userArray.concat(abcLowerArr);
    } 
  }

  function getUserNums() {
    var userNums = confirm("Would you like numbers?");
    if (userNums) {
      userArray = userArray.concat(numArr);
    } 
  }

  function getUserSpecials() { 
    var userSpecial = confirm("Would you like special characters?");
    if (userSpecial) {
      userArray = userArray.concat(spCharacterArr);
    }
  }


function getUserChoices() {
  getUserLength();
  getUserUpper();
  getUserLower();
  getUserNums();
  getUserSpecials();
}
  getUserChoices();
  
 
  var password = userArray[Math.floor(Math.random() * userArray.length)];
  
  for (var i = 0; i < pwLength; i++) {
    pwArray.push(i);
  }

  console.log(pwLength, pwArray, password);


  


    
    
    // function getUserChoices() {
      //   var userLength = prompt("how many characters? Please enter a number between 8 and 128");
      //   var userUpper = confirm("Would you like uppercase letters?");
      //   var userLower = confirm("would you like lowercase letters?");
      //   var userNums = confirm("Would you like numbers?");
      //   var userSpecial = confirm("Would you like special characters?");
      // }

    // if (!(7 < userLength < 129)) {
    //   alert("This is not a valid number, please enter a number greater than 7 and less than 129.");
    //   return getUserChoices();
    // }
    // else if (userUpper) {
    //   userArray.push(userArray.concat(abcUpperArr));
    // }
    // else if (userLower) {
    //   userArray.push(userArray.concat(abcLowerArr));
    // }    
    // else if (userNums) {
    //   userArray.push(userArray.concat(numArr));
    // } 
    // else if (userSpecial) {
    //   userArray.push(userArray.concat(spCharacterArr));      
    // }
    //     }
      
  // getUserChoices();
  // console.log(userArray);


//userArray.push(abcUpperArr.concat(abcLowerArr, numArr, spCharacterArr));




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
  
  


// User Interractions ======================================
  // user clicks to generate password


// Dependencies (HTML Elements, Libraries, etc.) ==============
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Starting Data =====================================================

// Functions =========================================================
function generatePassword() {
  return "a string"
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