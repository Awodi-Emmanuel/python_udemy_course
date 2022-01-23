///////////////////////////////////////////////////
//////// Call back function! /////////////
///////////////////////////////////////////////////

function sumVal(num, num2) {
  return num * num2;
}

console.log(sumVal(70, 60));

///////////////////////////////////////////////////
//////// Local scope to the function! /////////////
///////////////////////////////////////////////////

function timesFive(numInput) {
  var result = numInput * 8;
  return result;
}

console.log(timesFive(5));

///////////////////////////////////////////////////
//////// Global scope to the function! /////////////
///////////////////////////////////////////////////

var v = "GLOBAL V";
var stuff = "GLOBAL STUFF";

function fun(stuff) {
  console.log(v);
  stuff = "Reasign stuff inside func";
  console.log(stuff);
}
fun();

console.log(stuff);

///////////////////////////////////////////////////
//////// Exercise on function /////////////////////
///////////////////////////////////////////////////

function sleepIn(weekday, vacation) {
  //   if (!weekday && !vacation) return true;
  //   if (weekday && !vacation) return false;
  //   if (!weekday && vacation) return true;
  return !weekday || vacation;
}

// console.log(sleepIn(false, false));
// console.log(sleepIn(true, false));
// console.log(sleepIn(false, true));

function monkeyTrouble(aSmile, bSmile) {
  if (aSmile && bSmile) return true;
  if (!aSmile && !bSmile) return true;
  return false;
}

console.log(monkeyTrouble(true, true));
console.log(monkeyTrouble(false, false));
console.log(monkeyTrouble(true, false));
