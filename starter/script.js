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
var allCharacters = [specialCharacters, numericCharacters, lowerCasedCharacters, upperCasedCharacters ];
console.log("These are an Array of characters to be included in password :  " + allCharacters);

// Function to prompt user for password options
function getPasswordOptions() {
  var password = prompt("Please enter your password");
  if (password === allCharacters ){
    console.log("At least 8 characters but no more than 128.");
  }

};
getPasswordOptions()

// // Function for getting a random element from an array
// function getRandom(){
//   return allOptionPassword[Math.floor(Math.random()*allOptionPassword.length)];
  
// }
// console.log(getRandom(allOptionPassword));

// // Function to generate password with user input



// function generatePassword() { 
// }

// generatePassword()
// // Get references to the #generate element
// var generateBtn = document.querySelector('#generate');

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword()
//   var passwordText = document.querySelector('#password');


//   passwordText.value = password;
// }
// writePassword();
// // Add event listener to generate button
// generateBtn.addEventListener('click', writePassword);

// // Alert the results

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

