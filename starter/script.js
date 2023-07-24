// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];


//all variables in an Array of characters to be included in password
var allCharacters = [
  specialCharacters, 
  numericCharacters, 
  lowerCasedCharacters, 
  upperCasedCharacters,
];
console.log("These are an Array of characters to be included in password :  " + allCharacters);

//variables to prompt user for password options
  var passwordLength;
  var confirmLowerCase;
  var confirmUpperCase;
  var confirmNumber;
  var confirmCharacter;
  var choices;

// DOM elements we’ll be working with:
var generateBtn = document.querySelector('#generate');
var passwordText = document.querySelector('#password');

// Start function to generate password
// Function to promt random password options

function generatePassword() {
    passwordLength = parseInt(prompt("What is the length of password like?"));
    if(!passwordLength){
      alert ("This needs a value");
    } else if(passwordLength < 8 || passwordLength > 128){
      //Start user input
      passwordLength = parseInt(prompt("You must choose 8 and 128"))
    } else { 
      //
      confirmLowerCase = confirm("Do you want lowercase?");
      confirmUpperCase = confirm("Do you want Uppercase?");
      confirmNumber = confirm("Do you want Number?");
      confirmCharacter = confirm("Do you want Symbols?");
    }

    // Else if for 4 negative options
    if (!confirmCharacter && !confirmNumber && !confirmUpperCase && !confirmLowerCase) {
      choices = alert("You must choose a criteria!");
  } else if (confirmCharacter && confirmNumber && confirmUpperCase && confirmLowerCase){
    choices = specialCharacters.concat(numericCharacters, lowerCasedCharacters, upperCasedCharacters);
  }

  // Else if for 3 positive options
  else if (confirmCharacter && confirmNumber && confirmUppercase) {
    choices = specialCharacters.concat(numericCharacters, upperCasedCharacters);
}
else if (confirmCharacter && confirmNumber && confirmLowercase) {
    choices = specialCharacters.concat(numericCharacters, lowerCasedCharacters);
}
else if (confirmCharacter && confirmLowercase && confirmUppercase) {
    choices = specialCharacters.concat(lowerCasedCharacters, upperCasedCharacters);
}
else if (confirmNumber && confirmLowercase && confirmUppercase) {
    choices = numericCharacters.concat(lowerCasedCharacters, upperCasedCharacters);
}
  //else if for 2 positive options
  else if (confirmCharacter && confirmNumber){
    choices = specialCharacters.concat(numericCharacters);
  } else if (confirmCharacter && confirmLowerCase){
    choices = specialCharacters.concat(lowerCasedCharacters);
  } else if (confirmCharacter && confirmUpperCase){
    choices = specialCharacters.concat(upperCasedCharacters);
  } else if (confirmLowerCase && confirmNumber){
    choices = lowerCasedCharacters.concat(numericCharacters);
  } else if (confirmLowerCase && confirmUpperCase){
    choices = lowerCasedCharacters.concat(upperCasedCharacters)
  } else if (confirmNumber && confirmUpperCase){
    choices = numericCharacters.concat(upperCasedCharacters);
  }
  // else if for 1 positive option
  else if (confirmCharacter) {
    choices = specialCharacters;
  } else if(confirmNumber){
    choices = numericCharacters;
  } else if (confirmLowerCase){
    choices = lowerCasedCharacters;
  } else if (confirmUpperCase){
    choices = upperCasedCharacters;
  };

// Function for getting a random element from an array
  var password = [];
  // Random selection for all variables:
  for (var i = 0; i < allCharacters.Length; i++) {
    var pickChoices = choices[Math.floor(Math.random() * choices.length)];
    password.push(pickChoices);
}
// This joins the password array and converts it to a string
var ps = password.join("");
    UserInput(ps);
    return ps;
};

generatePassword()

// Changed function input to use textcontent
function UserInput(ps) {
  document.getElementById("password").textContent = ps;

};

// Write password to the #password input
function writePassword() {
  var password = generatePassword(),
  passwordText = document.querySelector('#password').value;
  document.querySelector('#generate').innerHTML;
  passwordText.value = password;
  alert ("Choose your Password")
};

writePassword();

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

// /* METHOD 2 */
// // Declare variavles for each DOM elements.
// var passwordText = document.querySelector('#password');
// var length = document.querySelector(`length`);
// var innumericCharacters = document.querySelector(`numericCharacters`);
// var inspecialCharacters = document.querySelector(`specialCharacters`);
// var generateBtn = document.querySelector('#generate');

// // This data is the passed to "Generate Passsword" function :
// generateBtn.addEventListener('click', () => {
//   var characters = [upperCasedCharacters, lowerCasedCharacters];
//   innumericCharacters.checked ? (characters += numericCharacters) : "";
//   inspecialCharacters.checked ? (characters += specialCharacters) : "";
//   passwordText.value = generatePassword(length.value, characters)
// });

// // Here is the generatePassword function creates the password :
// var  generatePassword = (length,characters) => {
//   for (var i = 0; i < length; i++) {
//     password += characters.chartAt(Math.floor(Math.random()*characters.length))
//   }
// };

// // Finally the functionally for copy clipboard selector 
// var copyBtn = document.getElementById("copy");
// copyBtn.addEventListener('click', () => {
//   passwordText.select();
//   document.execCommand(`copy`);
//   alert("Password Copied");
// });

