// Assignment Code
var generateBtn = document.querySelector("#generate");
//declare variables for the characters, numbers and symbols
var upperCase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase ="abcdefghijklmnopqrstuvwxyz";
var numbers ="0123456789";
var symbols ="!@,#$%&*{}[]/+=";
var userChoice = "";



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// Password Generate Prompts
function generatePassword() {
// defined empty result variable here to clear password if user re-generates a new a new password 
  var result = "";
// prompt user for password length
  passwordLength = prompt("Please choose between 8 and 128 characters for your password");
  
  //cancel button will close password length prompt
  if (passwordLength === null) {
    return result;  
  }

  // if not required length alert user
  if(passwordLength < 8 || passwordLength > 128){
    alert("Please choose a number between 8 - 128");
    return generatePassword()
  }

  // if not a number alert user
  if(isNaN(passwordLength)){
    alert("You must input a number");
    return generatePassword()
  }

  console.log("Password length " + passwordLength);

  // User select uppercase letters
  selectUpper = confirm("Would you like to include uppercase letters?");
  console.log("uppercase letters " + selectUpper);

  // User select lowercase letters
  selectLower = confirm("Would you like to include lowercase letters?");
  console.log("lowercase letters " + selectLower);

  // User select numbers
  selectNumbers = confirm("Would you like to include numbers?");
  console.log("use numbers " + selectNumbers);

  // User select symbols
  selectSymbols = confirm("Would you like to include symbols?");
  console.log("use symbols " + selectSymbols);
  
  // if nothing selected alert user
  if (!selectUpper&&!selectLower&&!selectNumbers&&!selectSymbols) {
    alert("You must have at least one character type");
    return generatePassword()
  }

  
  // if user selects all options
  if (selectUpper&&selectLower&&selectNumbers&&selectSymbols) {
    userChoice = upperCase + lowerCase + numbers + symbols;
  }
  
  // all variations of if user has 3 options 
  else if (selectUpper&&selectLower&&selectNumbers) {
    userChoice = upperCase + lowerCase + numbers;

  }
  else if (selectUpper&&selectLower&&selectSymbols) {
    userChoice = upperCase + lowerCase + symbols;

   }
  else if (selectUpper&&selectNumbers&&selectSymbols) {
    userChoice = upperCase + numbers + symbols;

 }
  else if (selectLower&&selectNumbers&&selectSymbols) {
  userChoice = lowerCase + numbers + symbols;

} 

// all variations of if user has 2 options 
  else if (selectUpper&&selectLower) {
    userChoice = upperCase + lowerCase;

  }
  else if (selectUpper&&selectSymbols) {
    userChoice = upperCase + symbols;

  }
  else if (selectUpper&&selectNumbers) {
    userChoice = upperCase + numbers;

  }
  else if (selectLower&&selectNumbers) {
    userChoice = lowerCase + numbers;
 
  }
  else if (selectLower&&selectSymbols) {
    userChoice = lowerCase + symbols;
    
  }
  else if (selectNumbers&&selectSymbols) {
    userChoice = numbers + symbols;

  }
   // only uppercase
  else if(selectUpper){
    userChoice = upperCase;
 
  }
  // only lowercase
  else if(selectLower){
    userChoice = lowerCase;
  
  }
  // only numbers
  else if(selectNumbers){
    userChoice = numbers;
 
  }
  // only symbols
  else if(selectSymbols){
    userChoice = symbols;
   
  }


  // for loop that takes password length and userChoice then randomises into result
  for (var i = 0; i < passwordLength; i++) {
    result += userChoice.charAt(Math.floor(Math.random() * userChoice.length));
  }

  return result;
    
}