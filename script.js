// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
console.log(generateBtn)

// Assignment code here
var letters=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// TODO:CHANGE NUMBERS AND SYMBOLS TO THE SYNTAX OF THE LETTERS SHOWN ABOVE
var numbers=["1","2","3","4","5","6","7","8","9","0"];
var symbols=["!","@","#","$","%","^","&","*","(",")","_","+"
,"=","]","[","?",">","<","~"];
function generatePassword(){

  return "password";
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword ();
  var passwordText = document.querySelector("#password");

  passwordText.value = password



  // TODO:I am presented with a series of prompts for password criteria

  //TODO: WHEN prompted for password criteria
// THEN I select choose password length
// TODO: Choose length at least 8 char and no more than 128

var length =confirm ("How long do you want your password?")
console.log(length)

// TODO: confirm whether or not to include lowercase

var lowercase = confirm("Do you want to include lowercase letters in your password?");
console.log(lowercase)

//var r = confirm("Are you sure you want to delete?");
// TODO: confirm whether or not to include uppercase

var uppercase = confirm("Do you want to include uppercase letters in your password?");
console.log(uppercase)

// TODO: confirm whether or not to include numbers

var numbers = confirm("Do you want to include numbers in your password?");
console.log(numbers)

// TODO: confirm whether or not to include symbols

var symbols = confirm("Do you want to include symbols in your password?");
console.log(symbols)

// TODO:validate that at least one character type is selected 

//if none of these are true, restart the function

example = writePassword ()

// TODO: password generated that fits criteria
// TODO: Pass parameters to generate password function
var password = generatePassword(length,lowercase, uppercase, numbers, symobols);
console.log(password)
// TODO: password displayed or alert shown
var password = generatePassword ();
var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
