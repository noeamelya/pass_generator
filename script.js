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

// DOM elements we’ll be working with:
var generateBtn = document.querySelector('#generate');

// Add event listener to generate button
generateBtn.addEventListener('click', function(){
  password = generatePassword();
  document.querySelector('#password').placeholder = password;
  
} )
// Start to Generate Password
// Function to prompt user for password options
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
    var userSelection;
    if (!confirmCharacter && !confirmNumber && !confirmUpperCase && !confirmLowerCase) {
      userSelection = alert("You must choose a criteria!");
  } else if (confirmCharacter && confirmNumber && confirmUpperCase && confirmLowerCase){
    userSelection = specialCharacters.concat(numericCharacters, lowerCasedCharacters, upperCasedCharacters);
  }

  // Else if for 3 positive options
  else if (confirmCharacter && confirmNumber && confirmUppercase) {
    userSelection = specialCharacters.concat(numericCharacters, upperCasedCharacters);
}
else if (confirmCharacter && confirmNumber && confirmLowercase) {
  userSelection = specialCharacters.concat(numericCharacters, lowerCasedCharacters);
}
else if (confirmCharacter && confirmLowercase && confirmUppercase) {
  userSelection = specialCharacters.concat(lowerCasedCharacters, upperCasedCharacters);
}
else if (confirmNumber && confirmLowercase && confirmUppercase) {
  userSelection = numericCharacters.concat(lowerCasedCharacters, upperCasedCharacters);
}
  //else if for 2 positive options
  else if (confirmCharacter && confirmNumber){
    userSelection = specialCharacters.concat(numericCharacters);
  } else if (confirmCharacter && confirmLowerCase){
    userSelection = specialCharacters.concat(lowerCasedCharacters);
  } else if (confirmCharacter && confirmUpperCase){
    userSelection = specialCharacters.concat(upperCasedCharacters);
  } else if (confirmLowerCase && confirmNumber){
    userSelection = lowerCasedCharacters.concat(numericCharacters);
  } else if (confirmLowerCase && confirmUpperCase){
    userSelection = lowerCasedCharacters.concat(upperCasedCharacters)
  } else if (confirmNumber && confirmUpperCase){
    userSelection = numericCharacters.concat(upperCasedCharacters);
  }
  // else if for 1 positive option
  else if (confirmCharacter) {
    userSelection = specialCharacters;
  } else if(confirmNumber){
    userSelection = numericCharacters;
  } else if (confirmLowerCase){
    userSelection = lowerCasedCharacters;
  } else if (confirmUpperCase){
    userSelection = upperCasedCharacters;
  };
  // Random selection for all variables: 
  var getPassword = [];
  for (var i = 0; i < passwordLength; i++){
    var pickSelection = userSelection[Math.floor(Math.random()* userSelection.length)];
    getPassword.push(pickSelection);
  }
  var password = getPassword.join("");
  UserInput(password);
  return password;
};

// Changed function input
function UserInput(password){
  var passwordText = document.querySelector('#password').value ;
  passwordText = password;
};

