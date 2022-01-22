var x = 1;
var y = 2;

console.log("2" == y && x === 1);

console.log(x >= 0 || y === "2");

console.log(!(x !== 1) && y === 1 + 1);

console.log(y !== "2" && x < 10);

console.log(y !== x || y == "2" || x === 3);

// Write a While Loop that prints out
// only the even numbers from 1 to 10.

// my Answer

var a = 0;

while (a < 11) {
  console.log("here is our even number ======> " + a);

  a = a + 2;
}

// instructor's solution

var num = 1;

while (num < 11) {
  console.log(num);
  num = num + 1;
}

// solutin 2

var getEven = 1;

while (getEven < 11) {
  if (getEven % 2 === 0) {
    console.log(getEven);
  }
  getEven = getEven + 1;
}

var num1 = 0;

while (num1 < 6) {
  console.log("hello word");
  num = num + 1;
}

var cooutNum = 0;

while (cooutNum < 11) {
  console.log("Yay counted even number ===> " + cooutNum);
  cooutNum = cooutNum + 2;
}
 