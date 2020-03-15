// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(passwordLength, includedLowercase, includedUppercase, includedNumbers, includedSpecialCharacters ) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Adding variables for confirmations/prompts
var confirmReady = confirm("Ready to select password criteria?");
var characterChoices = ["lowercase", "uppercase", "numbers", "specialCharacters"]


// If the user is ready alert next steps
if (confirmReady) {
   alert("You will be asked for password length")
}

// If the new user is not ready goodbye 
else {
  alert("We'll see you next time!")
  e.preventDefault()
  
}
// Prompt for user to enter password length
var promptLength = prompt("Enter desired password length (8-128 characters");
    promptLength.value = passwordLength

//  MAKE SURE INPUTS ARE VALIDATED
if (promptLength) {
    alert("You will be asked to choose character types")
  }

// Creating character variables
var lowercase = ("abcdefghijklmnopqrstuvwxyz")
var uppercase = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
var numbers = (0,1,2,3,4,5,6,7,8,9)
var specialCharacters = ("#$%&'()*+,-./:;<=>?@[\]^_`{|}~")

// Character confirmation prompts
var includeLowercase = confirm("Include lowercase characters?")
var includeUppercase = confirm("Include uppercase characters?")
var includeNumbers = confirm("Include numbers?")
var includeSpecialCharacters = confirm("Include special characters?")

// Prompt values
var includedCharacters = ["includeLowercase", "includeUppercase", "includeNumbers", "includeSpecialcharacters"]

// Write password to the #password input
function writePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSpecialCharacters) {
  for (i = 0; i = passwordLength; i++) {
    Math.floor(math.random()*passwordLength)
// Generating password
  var password = generatePassword(includedCharacters);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  return password;

  }
}