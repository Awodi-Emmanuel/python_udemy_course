var firstNamechar = prompt("what is your first name");
var lastNamechar = prompt("what is your last name");
var spyAge = prompt("how old are you?");
var SpyFit = prompt("How tall are you in centimetter");
var spyPet = prompt("What is the name of your pet");
alert("Thank you so much for the information!!");

// LOGIC

var nameCond = null;
var ageCond = null;
var heightCond = null;
petCond = null;

if (firstNamechar[0] === lastNamechar[0]) {
  nameCond = true;
} else {
  nameCond = false;
}

if (spyAge > 20 && spyAge < 30) {
  ageCond = true;
} else {
  ageCond = false;
}

if (SpyFit == 175) {
  heightCond = true;
} else {
  heightCond = false;
}

if (spyPet[spyPet.length - 1] === "y") {
  petCond = true;
} else {
  petCond = false;
}

if (nameCond && ageCond && heightCond && petCond) {
  console.log("Welcome Spy!");
} else {
  console.log("Nothing to see here!");
}
