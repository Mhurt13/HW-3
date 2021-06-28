// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var lowerCharacters = prompt("a", "b", "c", "d", "e");
  var numCharacters = prompt("enter a number from 6 to 142");
  let returnString = '';
  console.log(numCharacters);
  for(let i = 0; i < numCharacters; i++){
      returnString += lowerCharacters[Math.floor(Math.random() * lowerCharacters)]
  }
  return returnString;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
console.log("writePassword")

