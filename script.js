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


// Write password to the #password input
function writePassword(passwordLength, includedLowercase, includedUppercase, includedNumbers, includedSpecialCharacters) {
  var password = generatePassword(lowercase, uppercase, numbers, specialCharacters);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Prompt values
var includedCharacters = ["includeLowercase", "includeUppercase", "includeNumbers", "includeSpecialcharacters"]

// Confirmation answers for loop
//var chosenCharacters = confirm(includedCharacters[i])

for (i = 0; i < includedCharacters.length; i++) {
   

}
  // Loop 10 times
  for (var i = 0; i < 10; i++) {
    // Generate a random number between 1 and 10
    // Math.floor will round down, meaning we would get a number between 0 and 9, so we'll always add 1 to bump it up.
    var num = Math.floor(Math.random() * 10) + 1;


// Adding event listeners to confirmation prompts

//includeLowercase.addEventListener("input", )
// Prompt values

//var chosenCharacters = includedCharacters.value 
//var chosenCharacters = confirm(includedCharacters[i].q)

alert()
   //alert("Include" + "characterChoices")
   //for (i = 0; i < characterChoices.length; i++) {
     //console.log(characterChoices[i])
   //}
   



// Valuation of password length
promptLength.value = passwordLength


// Selecting which character variables to include

// For loop for random character choice based on length 