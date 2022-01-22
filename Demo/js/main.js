// var outList = 0;

// while (outList < 4) {
//   console.log("hello")
//   outList = outList +1
// }


///////////////////////////////////////
//////////   PROBLEM 1 ///////////////
///////////////////////////////////////

// Use a For Loop to print (console.log()) out the word "hello" 5

//

// Do this with a While Loop and a For Loop

// While Loop

// var outList = 0;

// while (outList < 5) {
//   console.log("hello");
//   outList = outList + 1;
// }

// For Loop
// var sayHello = 5;

for (var y = 0; y <= 4; y++) {
  console.log("hello");
}


///////////////////////////////////////
//////////   PROBLEM 1 ///////////////
///////////////////////////////////////

// Use Loops to console.log() (print out) all the odd numbers from 1 25
// Do this using two methods, a while Loop and a for Loop

// Method One
// While Loop

var countOdd = 1;

while (countOdd < 26) {
  console.log(countOdd);
  countOdd = countOdd + 2;
}

for (var oddNum = 1; oddNum < 26; oddNum++){
  console.log(oddNum);
  ++oddNum
}