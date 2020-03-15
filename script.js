// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
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
   alert("You will be asked for password length and character type")
}

// If the new user is not ready goodbye 
else {
  alert("We'll see you next time!")
  e.preventDefault()
  
}
// Prompt for user to enter password length
var promptLength = prompt("Enter desired password length (8-128 characters");

//  MAKE SURE INPUTS ARE VALIDATED
if (promptLength) {
   alert("Include" + "characterChoices")
   for (i = 0; i < characterChoices.length; i++) {
     console.log(characterChoices[i])
   }
   
}


// Valuation of password length
promptLength.value = passwordLength

// Creating character variables
var lowercase = ("abcdefghijklmnopqrstuvwxyz")
var uppercase = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
var numbers = (0,1,2,3,4,5,6,7,8,9)
var specialCharacters = ("#$%&'()*+,-./:;<=>?@[\]^_`{|}~")

// Selecting which character variables to include

// For loop for random character choice based on length 