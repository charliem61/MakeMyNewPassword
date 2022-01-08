// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// console.log(generateBtn);

// Assignment code here
var lowercase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var uppercase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
// console.log(lowercase.length);
// console.log(uppercase.length);

var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var symbols = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "+",
  "=",
  "]",
  "[",
  "?",
  ">",
  "<",
  "~",
];

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// TODO:I am presented with a series of prompts for password criteria

//TODO: WHEN prompted for password criteria

// THEN I select choose password length

// TODO: Choose length at least 8 char and no more than 128

function generatePassword() {
  // console.log("generatePassword");

  var lengthChoice = prompt("How long do you want your password (8-128 characters)?");
  if (lengthChoice < 8 || lengthChoice > 128) generatePassword ();
  // console.log(lengthChoice);

  // TODO: confirm whether or not to include lowercase

  var lowercaseChoice = confirm(
    "Do you want to include lowercase letters in your password?"
  );
  // console.log(lowercaseChoice);

  //var r = confirm("Are you sure you want to delete?");

  // TODO: confirm whether or not to include uppercase

  var uppercaseChoice = confirm(
    "Do you want to include uppercase letters in your password?"
  );
  // console.log(uppercaseChoice);

  // TODO: confirm whether or not to include numbers

  var numbersChoice = confirm(
    "Do you want to include numbers in your password?"
  );
  // console.log(numbersChoice);

  // TODO: confirm whether or not to include symbols

  var symbolsChoice = confirm(
    "Do you want to include symbols in your password?"
  );
  //   console.log(symbolsChoice);

  

  // TODO:validate that at least one character type is selected

  if (lowercaseChoice || uppercaseChoice || numbersChoice || symbolsChoice) {
    var charChoices = [];

    // IF lowercaseChoice

    // THEN add `lowercase` to `charChoices`

    // .concat()
    if (lowercaseChoice) charChoices = charChoices.concat(lowercase);

    // IF uppercaseChoice

    // THEN add `uppercase` to `charChoices`
    if (uppercaseChoice) charChoices = charChoices.concat(uppercase);

    // IF numbersChoice

    // THEN add `numbers` to `charChoices`
    if (numbersChoice) charChoices = charChoices.concat(numbers);

    //IF symbolsChoice

    // THEN add `symbols` to `charChoices`
    if (symbolsChoice) charChoices = charChoices.concat(symbols);

    var password = "";

    //for loop until password is desired length//

    // MAKE SURE YOU INCLUDE AT LEAST ONE OF CHARACTER TYPE IF THEY CHOSE YES FOR THAT TYPE
    // -- IF THEY CHOSE YES/OK TO UPPERCASE, PASSWORD NEEDS AT LEAST ONE UPPERCASE
    for (var i = 0; i < lengthChoice; i++) {
      // Choose a random item from `charChoices`///And appending to password string.//
      password += charChoices[getRandomNumber(0, charChoices.length - 1)];

      // end of first loop i = 0, add 1 to it (i++), i is now 1
      // end of second loop i = 1, add 1 to it (i++), i is now 2
    }

    return password;
  } else {
    generatePassword();
  }
}

//if none of these are true, restart the function

// TODO: password generated that fits criteria

// TODO: Pass parameters to generate password function
// var password = generatePassword(length, lowercase, uppercase, numbers, symbols);
// console.log(password);

// TODO: password displayed or alert shown
// var passwordText = document.querySelector("#password");

// passwordText.value = password;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log(password);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  // console.log("generate button click");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
