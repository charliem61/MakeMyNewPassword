// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
console.log(generateBtn);

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
console.log(lowercase.length);
console.log(uppercase.length);

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

// password += "a";
// password += "b";
// password += "c";
// password += "d";
// password += "e";
// password += "f";
// password += "g";
// password += "h";
// password += "i";
// password += "j";
// password += "k";
// password += "l";
// password += "m";
// password += "n";
// password += "o";
// password += "p";
// password += "q";
// password += "r";
// password += "s";
// password += "t";
// password += "u";
// password += "v";
// password += "w";
// password += "x";
// password += "y";
// password += "z";
// password += "A";
// password += "B";
// password += "C";
// password += "D";
// password += "E";
// password += "F";
// password += "G";
// password += "H";
// password += "I";
// password += "J";
// password += "K";
// password += "L";
// password += "M";
// password += "N";
// password += "O";
// password += "P";
// password += "Q";
// password += "R";
// password += "S";
// password += "T";
// password += "U";
// password += "V";
// password += "W";
// password += "X";
// password += "Y";
// password += "Z";
// password += "1";
// password += "2";
// password += "3";
// password += "4";
// password += "5";
// password += "6";
// password += "7";
// password += "8";
// password += "9";
// password += "0";
// password += "!";
// password += "@";
// password += "#";
// password += "$";
// password += "%";
// password += "^";
// password += "&";
// password += "*";
// password += "(";
// password += ")";
// password += "_";
// password += "+";
// password += "=";
// password += "[";
// password += "]";
// password += "?";
// password += "<";
// password += ">";
// password += "~";

// TODO:I am presented with a series of prompts for password criteria

//TODO: WHEN prompted for password criteria

// THEN I select choose password length

// TODO: Choose length at least 8 char and no more than 128

function generatePassword() {
  console.log("generatePassword");

  var lengthChoice = prompt("How long do you want your password?");
  console.log(lengthChoice);

  // TODO: confirm whether or not to include lowercase

  var lowercaseChoice = confirm(
    "Do you want to include lowercase letters in your password?"
  );
  console.log(lowercaseChoice);

  //var r = confirm("Are you sure you want to delete?");

  // TODO: confirm whether or not to include uppercase

  var uppercaseChoice = confirm(
    "Do you want to include uppercase letters in your password?"
  );
  console.log(uppercaseChoice);

  // TODO: confirm whether or not to include numbers

  var numbersChoice = confirm(
    "Do you want to include numbers in your password?"
  );
  console.log(numbersChoice);

  // TODO: confirm whether or not to include symbols

  var symbolsChoice = confirm(
    "Do you want to include symbols in your password?"
  );
  console.log(symbolsChoice);

  // TODO:validate that at least one character type is selected

  if (lowercaseChoice || uppercaseChoice || numbersChoice || symbolsChoice) {
    var charChoices = [];

    // IF lowercaseChoice

    // THEN add `lowercase` to `charChoices`

    // .concat()
    charChoices = charChoices.concat(lowercase);

    // IF uppercaseChoice

    // THEN add `uppercase` to `charChoices`
    charChoices = charChoices.concat(uppercase);

    // IF numbersChoice

    // THEN add `numbers` to `charChoices`
    charChoices = charChoices.concat(numbers);

    //IF symbolsChoice

    // THEN add `symbols` to `charChoices`
    charChoices = charChoices.concat(symbols);

    var password = "";

    //for loop until password is desired length//

    for (var i = 0; i < length; i++) {
      // Choose a random item from `charChoices`
      password += "a";

      // end of first loop i = 0, add 1 to it (i++), i is now 1
      // end of second loop i = 1, add 1 to it (i++), i is now 2
    }

    //password += symbols[Math.random];
    //password += numbers[Math.random];
    //password += uppercase[Math.random];
    //password += lowercase[Math.random];

    // // a
    // password += "b";
    // // ab
    // password += "c";
    // // abc
    // password += "d";
    // // abcd

    return password;
  } else {
    generatePassword();
  }
}

// || are called pipes and they simply mean OR//

// /* REMEMBERthisNOTE */ is called a block comment and this blocks all code within //

//if none of these are true, restart the function

// TODO: password generated that fits criteria

// TODO: Pass parameters to generate password function
// var password = generatePassword(length, lowercase, uppercase, numbers, symbols);
console.log(password);

// TODO: password displayed or alert shown
var passwordText = document.querySelector("#password");

passwordText.value = password;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log("generate button click");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
