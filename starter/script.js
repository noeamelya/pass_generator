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
var allCharacters = {
  symbols: specialCharacters, 
  numbers: numericCharacters, 
  lower: lowerCasedCharacters, 
  upper: upperCasedCharacters,
};
console.log("These are an Array of characters to be included in password :  " + allCharacters);

//variables to prompt user for password options

  var passwordLength;
  var confirmLowerCase;
  var confirmUpperCase;
  var confirmNumber;
  var confirmCharacter;

  // Function to promt random password options

function getPasswordOptions() {
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
    choices = symbols.concat(numbers, lower, upper);
  }

  // Else if for 3 positive options
  else if (confirmCharacter && confirmNumber && confirmUppercase) {
    choices = symbols.concat(numbers, upper);
}
else if (confirmCharacter && confirmNumber && confirmLowercase) {
    choices = symbols.concat(numbers, lower);
}
else if (confirmCharacter && confirmLowercase && confirmUppercase) {
    choices = symbols.concat(lower, upper);
}
else if (confirmNumber && confirmLowercase && confirmUppercase) {
    choices = numbers.concat(lower, upper);
}
  //else if for 2 positive options
  else if (confirmCharacter && confirmNumber){
    choices = symbols.concat(numbers);
  } else if (confirmCharacter && confirmLowerCase){
    choices = symbols.concat(lower);
  } else if (confirmCharacter && confirmUpperCase){
    choices = symbols.concat(upper);
  } else if (confirmLowerCase && confirmNumber){
    choices = lower.concat(numbers);
  } else if (confirmLowerCase && confirmUpperCase){
    choices = lower.concat(upper)
  } else if (confirmNumber && confirmUpperCase){
    choices = numbers.concat(upper);
  }
  // else if for 1 positive option
  else if (confirmCharacter) {
    choices = symbols;
  } else if(confirmNumber){
    choices = numbers;
  } else if (confirmLowerCase){
    choices = lower;
  } else if (confirmUpperCase){
    choices = upper;
  }
};

// Function for getting a random element from an array

function getRandom(){
var arr = allCharacters;
for (var i = 0; i < arr.Length; i++) {
  var randomLetter = arr[Math.floor(Math.random() * arr.length)];
  randomLetter.push(arr);
}
};


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Function to generate password with user input
function generatePassword(){


}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password').value;
  document.querySelector('#generate').innerHTML;
  passwordText.value = password
  alert ("Write Password")
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword)







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

