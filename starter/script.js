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

// //User input variables
//   var passLength;
//   var confirmLowerCase;
//   var confirmUpperCase;
//   var confirmNumber;
//   var confirmCharacter;
  
  
// DOM elements we’ll be working with:
var generateBtn = document.querySelector('#generate');
var passwordText = document.querySelector('#password');

// Function to prompt user for password options
// function getPasswordOptions() {
//     passwordLength = parseInt(prompt("What is the length of password like?"));
//     if(!passwordLength){
//       alert ("This needs a value");
//     } else if(passwordLength < 8 || passwordLength > 128){
//       //Start user input
//       passwordLength = parseInt(prompt("You must choose 8 and 128"))
//     } else { 
//       //
//       confirmLowerCase = confirm("Do you want lowercase?");
//       confirmUpperCase = confirm("Do you want Uppercase?");
//       confirmNumber = confirm("Do you want Number?");
//       confirmCharacter = confirm("Do you want Symbols?");
//     }

//     // Else if for 4 negative options
//     var choices;
//     if (!confirmCharacter && !confirmNumber && !confirmUpperCase && !confirmLowerCase) {
//       choices = alert("You must choose a criteria!");
//   } else if (confirmCharacter && confirmNumber && confirmUpperCase && confirmLowerCase){
//     choices = specialCharacters.concat(numericCharacters, lowerCasedCharacters, upperCasedCharacters);
//   }

//   // Else if for 3 positive options
//   else if (confirmCharacter && confirmNumber && confirmUppercase) {
//     choices = specialCharacters.concat(numericCharacters, upperCasedCharacters);
// }
// else if (confirmCharacter && confirmNumber && confirmLowercase) {
//     choices = specialCharacters.concat(numericCharacters, lowerCasedCharacters);
// }
// else if (confirmCharacter && confirmLowercase && confirmUppercase) {
//     choices = specialCharacters.concat(lowerCasedCharacters, upperCasedCharacters);
// }
// else if (confirmNumber && confirmLowercase && confirmUppercase) {
//     choices = numericCharacters.concat(lowerCasedCharacters, upperCasedCharacters);
// }
//   //else if for 2 positive options
//   else if (confirmCharacter && confirmNumber){
//     choices = specialCharacters.concat(numericCharacters);
//   } else if (confirmCharacter && confirmLowerCase){
//     choices = specialCharacters.concat(lowerCasedCharacters);
//   } else if (confirmCharacter && confirmUpperCase){
//     choices = specialCharacters.concat(upperCasedCharacters);
//   } else if (confirmLowerCase && confirmNumber){
//     choices = lowerCasedCharacters.concat(numericCharacters);
//   } else if (confirmLowerCase && confirmUpperCase){
//     choices = lowerCasedCharacters.concat(upperCasedCharacters)
//   } else if (confirmNumber && confirmUpperCase){
//     choices = numericCharacters.concat(upperCasedCharacters);
//   }
//   // else if for 1 positive option
//   else if (confirmCharacter) {
//     choices = specialCharacters;
//   } else if(confirmNumber){
//     choices = numericCharacters;
//   } else if (confirmLowerCase){
//     choices = lowerCasedCharacters;
//   } else if (confirmUpperCase){
//     choices = upperCasedCharacters;
//   };
// };

// getPasswordOptions();

// // Function for getting a random element from an array
// function getRandom(array) {
  
// }
 

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');
// Added use selection
var userSelection = [];
var finalPassword = [];

// Function to generate password with user input
function generatePassword() {
  console.log("Hey! You clicked the button");
  //prompt user for password options
  var passLength = prompt("Please insert a number between 8 to 128");
  // Use if where the user choose less than 8 or greater that 128
  if (passLength < 8 ){
    alert("Please insert number between 8 to 128 ");
    return;
  }
  if (passLength >128){
    alert("Please insert number between 8 to 128 ");
    return;
  }
  // Added variables to confirm 
  var confirmUpperCase = confirm("Would you like Uppercase letters");
  if (confirmUpperCase){
    userSelection.push(upperCasedCharacters);
  }
  var confirmLowerCase = confirm("Would you like Lowercase letters");
  if (confirmLowerCase){
    userSelection.push(lowerCasedCharacters);
  }
  var confirmCharacter = confirm("Would you like special character for your password");
  if (confirmCharacter){
    userSelection.push(specialCharacters);
  }
  var confirmNumber = confirm("Would you like to add numbers to your password");
  if (confirmNumber){
    userSelection.push(numericCharacters);
  }

  console.log("User Selection: " + userSelection);

  // Added if statement 
  if (userSelection.length === 0){
    return;
  }
  // getting a random element from an array
  for (var i = 0; i < userSelection; i++){
    var randomIndex = Math.floor(Math.random()* userSelection);
    var random = userSelection.charArt(randomIndex);
    finalPassword = finalPassword.concat(random);
  }
  return finalPassword;
};

generatePassword();
var password = generatePassword();
console.log(`Password :::> ${password} | length :::> ${password.length}`);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}

writePassword();

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);