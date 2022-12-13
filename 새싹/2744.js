const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const inputLength = input.length;

let result = "";
let time = 0;
while (time < inputLength) {
  if (input.charCodeAt(time) >= 65 && input.charCodeAt(time) <= 90) {
    let changeText = input.charCodeAt(time) + 32;
    result += String.fromCharCode(changeText);
  }
  if (input.charCodeAt(time) >= 97 && input.charCodeAt(time) <= 122) {
    let changeText = input.charCodeAt(time) - 32;
    result += String.fromCharCode(changeText);
  }
  time++;
}
console.log(result);
