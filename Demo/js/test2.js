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
  //   if (aSmile && bSmile) return true;
  //   if (!aSmile && !bSmile) return true;
  //   return false;
  return (aSmile && bSmile) || (!aSmile && !bSmile);
}

console.log(monkeyTrouble(true, true));
console.log(monkeyTrouble(false, false));
console.log(monkeyTrouble(true, false));

function stringTimes(str, n) {
  var returnStr = "";
  var i = 0;
  while (i < n) {
    returnStr += str;
    i++;
  }
  return returnStr;
}
console.log(stringTimes("Hi", 2));
console.log(stringTimes("Hi", 3));
console.log(stringTimes("Hi", 1));

function stringTimesi(stir, m) {
  var rtStr = "";
  var x = 0;

  while (x < m) {
    rtStr += stir;
    x++;
  }
  return rtStr;
}
console.log(stringTimesi("Nice", 4));
console.log(stringTimesi("Nice", 2));

///////////////////////////////////////////////////
//////// Lucky Sum ////////////////////////////////
///////////////////////////////////////////////////

// Given 3 Numerical Values, a b c, return their sum. However, if one of the value.
// 13 then it does not count towards the sum and values to its right do not count.

//So for example if b is 13, then both b and c do not count.

// Hint (Explore using multiple return statements inside a single function!)

// Example input and output
function luckysum(a, b, c) {
  if (a === 13) {
    return 0;
  } else if (b == 13) {
    return a;
  } else if (c === 13) {
    return a + b;
  } else {
    return a + b + c;
  }
}

console.log(luckysum(1, 2, 3));
console.log(luckysum(1, 2, 13));
console.log(luckysum(1, 13, 3));

function caught_speeding(speed, is_birthday) {
  if (is_birthday) {
    speed -= 5;
  }
  if (speed <= 60) {
    return 0;
  }
  if (60 < speed <= 80) {
    return 1;
  }
  return 2;
}

console.log(caught_speeding(60, false));
console.log(caught_speeding(65, false));
console.log(caught_speeding(65, false));

function makeBricks(small, big, goal) {
  return goal % 5 >= 0 && (goal % 5) - small <= 0 && small + 5 * big >= goal;
}

console.log(makeBricks(3, 1, 8));
console.log(makeBricks(3, 1, 9));
console.log(makeBricks(3, 2, 10));

///////////////////////////////////////////////////
//////// The whole Exercise here is source
////////from codingbat.com ////////////////////////
///////////////////////////////////////////////////
