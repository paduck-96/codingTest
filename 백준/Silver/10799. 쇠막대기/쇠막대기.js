const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./samples.txt";
const input = fs.readFileSync(filePath).toString().trim();

let stack = [];
let result = 0;

for (let i = 0; i < input.length; i++) {
  if (input[i] === "(") {
    stack.push("(");
  } else {
    if (input[i - 1] === "(") {
      stack.pop();
      result += stack.length;
    } else {
      stack.pop();
      result += 1;
    }
  }
}

console.log(result);