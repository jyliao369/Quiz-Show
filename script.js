// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

// These three variables hold the different characters that can be used to generate a password
// One is normal letters, one is numbers, and the last is the special characters
var char = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var num = [0,1,2,3,4,5,6,7,8,9];
var specChar = ["~","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","}","[","]","|","<",",",">",".","?","/"];
// This will randomize which char gets selected and added to the overall password
// 0 = upper case char, 1 = num, 2 = specChar, and 4 = just char
var charSel = [0,1,2,3];
// How long you want the pass word to be.
var passlength = 0;
// An empty string to create your password.
var pass = "";
// These variables are booleans. They are used in the future where the site prompts the user if they
// would like to use certain characters in their passwords like numbers, special characters, or upper case specifically
var charUpOn = true;
var numOn = true;
var specCharOn = true;
var charLowOn = true;
// These boolean variables check to see if at least one
// of each character is in the password.
var charUpCheck = false;
var numOnCheck = false;
var specCharCheck = false;
var charCheck = false;

var genPass = function() {

  // This asks the user how long they want the password to be. 
  // It can be anywhere between 8 to 128 characters long.
  // This while loop will keep repeating until a number is selected that is between 8 and 128
  // Any lower or higher the loop will keep repeating
  while (passlength < 8 || passlength > 128) {
    passlength = window.prompt("How long do you want your password? (Pick a number between 8 and 128)");
  }
  
  // These confirm prompts ask the user if they would like to use certain characters in their password.
  // If they click, "Okay" it returns true, if "Cancel" it returns false. 

  charUpOn = window.confirm("Do you want Upper Case Characters?");
  charLowOn = window.confirm("Do you want Lower Case Characters?");
  numOn = window.confirm("Do you want Numbers?")
  specCharOn = window.confirm("Do you want Special Characters?");

  for (var a = 0; a < passlength; a++) {

    // This variables are random number generators that will a generate a random number based on the length
    // of each specific array. I would have one random number generator but the num array only has 10 nunbers thus any
    // number higher than 9 would return nothing. 
    // Every time we go through the loop it should generate new random numbers for each section
    var ranChar = Math.floor(Math.random() * char.length);
    var ranNum = Math.floor(Math.random() * num.length);
    var ranSpecChar = Math.floor(Math.random() * specChar.length);
    var ranCharSel = Math.floor(Math.random() * charSel.length);

    // This checks to see if any criteria is selected specially if none of the criterias are selected.
    // If none of the criteria is selected,  there is no point runnin the rest of the function
    // Thus returns a string to say try again due to no criteria selected.
    if (!charUpOn && !numOn && !specCharOn && !charLowOn) {
      pass = "No Criteria Specified. Try Again"
      return (pass);
    }

    // This will determine which character will be added to the overall password
    // This works to allow specific criterias to work like only selecting one criteria
    // like only numbers, only special characters and even only upper or lower case characters
    if (ranCharSel === 0 && charUpOn) {
      pass += char[ranChar].toUpperCase();
      charUpCheck = true;
    } else if (ranCharSel === 1 && numOn) {
      pass += num[ranNum];
      numOnCheck = true;
    } else if (ranCharSel === 2 && specCharOn) {
      pass += specChar[ranSpecChar];
      specCharCheck = true;
    } else if (charLowOn) {
      pass += char[ranChar];
      charCheck = true;
    } else {
      a--;
    }

  }

  if (!charUpOn || !numOn || !specCharOn) {
    return (pass);
  } else if (!charUpCheck || !numOnCheck || !specCharCheck || !charCheck) {
    a = 0;
    pass = "";
    genPass();
  } else {
    return (pass);
  }

}

function writePassword() {
  var password = ("This is your new password: " + pass);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", function(){

    pass = "";
    passlength = 0;
    window.alert("Let's create a password!!");
    genPass();
    writePassword();

  }
);





