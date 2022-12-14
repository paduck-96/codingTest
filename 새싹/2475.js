const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((n) => Number(n));

let result = 0;
let start = 0;
while (start < 5) {
  result += input[start] * input[start];
  start++;
}

console.log(result % 10);
