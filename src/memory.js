var arr = [];
var userInput = [];
export function hello(){

var color = ["red", "blue", "green", "yellow"];
var delayOutput = setInterval(test, 1000);

function add() {
  arr.push(color[Math.floor(Math.random() * 4)]);
  arr.push(" ");
}
add();

var arrTest = arr.slice();
function test() {
if (arrTest[0] === undefined) {
  clearInterval(delayOutput);
  arrTest = arr;
} else {
document.getElementById("test").innerHTML = arrTest[0];
 arrTest.shift();
}
}
document.getElementById("test1").innerHTML = arrTest;
}

export function userGuess(guess) {
  if (userInput.length < arr.length) {
    userInput.push(guess);
    userInput.push(" ");
    document.getElementById("test2").innerHTML = userInput;
  }
}

export function userOutput(){
  if (userInput.length === arr.length && userInput.join("") === arr.join("")) {
  document.getElementById("test2").innerHTML = 'good job';
  userInput.length = 0;
  hello();
} else if ((userInput.length === arr.length && userInput.join("") !== arr.join(""))) {
  document.getElementById("test2").innerHTML = "wrong, the correct answer is " + arr;
}
}







// export function red() {
//   userInput.push("red");
//   userInput.push(" ");
//   document.getElementById("test2").innerHTML = userInput;
// }
// export function blue() {
//   userInput.push("blue");
//   userInput.push(" ");
//   document.getElementById("test2").innerHTML = userInput;
// }
// export function green() {
//   userInput.push("green");
//   userInput.push(" ");
//   document.getElementById("test2").innerHTML = userInput;
// }
// export function yellow() {
//   userInput.push("yellow");
//   userInput.push(" ");
//   document.getElementById("test2").innerHTML = userInput;
// }
