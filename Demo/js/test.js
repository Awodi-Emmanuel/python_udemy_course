var firstNamechar = prompt("what is your first name");
var lastNamechar = prompt("what is your last name");
var spyAge = prompt("how old are you?");
var SpyFit = 170;
var spyPet = "dogy";

if (firstNamechar.charAt(0) == lastNamechar.charAt(0)) {
  console.log(firstNamechar + lastNamechar);
} else {
  console.log("The first latter doesn't corresponds");
}

if (spyAge > 20 && spyAge < 30) {
  console.log(spyAge);
} else {
  console.log("you've suppassed the given range");
}
