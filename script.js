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
var promptLength = prompt("Enter desired password length (8-128 characters");

// If the user is ready (confirmReady === true)
if (confirmReady) {
   alert(promptLength)
}

else {
  alert("We'll see you next time!")
}

// Valuation of password length
let length = document.getElementById("promptLength").value;

// Creating character variables
var lowercase = ("abcdefghijklmnopqrstuvwxyz")
var uppercase = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
var numbers = (0123456789)
var specialCharacters = ("#$%&'()*+,-./:;<=>?@[\]^_`{|}~")