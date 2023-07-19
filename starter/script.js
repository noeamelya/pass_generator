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



var allOptionPassword = [specialCharacters, numericCharacters, lowerCasedCharacters, upperCasedCharacters ]
var length = 12;

// Function to prompt user for password options
// prompt("How to get password")
function getPasswordOptions(allOptionPassword) {
  prompt("How to get password")
};

// Function for getting a random element from an array
function getRandom(arr) {
  for (var i = 0; i < arr.length; i++){
    console.log(arr[i]);
  };

}

// Function to generate password with user input
function generatePassword(allOptionPassword) {
  password += specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
  password += numericCharacters[Math.floor(Math.random() * numericCharacters.length)];
  password += lowerCasedCharacters[Math.floor(Math.random() * lowerCasedCharacters.length)];
  password += upperCasedCharacters[Math.floor(Math.random() * upperCasedCharacters.length)];

  while(length > password.length){
    password += allOptionPassword[Math.floor(Math.random() * allOptionPassword.length)];

  }
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);