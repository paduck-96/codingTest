const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const totalTime = Number(input.shift());
const result = [];
let start = 0;
while (start < totalTime) {
  if (Number(input[start]) !== 0) {
    result.push(Number(input[start]));
  } else {
    result.pop();
  }
  start++;
}
if (result.length === 0) console.log("0");
else {
  let answer = 0;
  result.forEach((el) => {
    answer += el;
  });
  console.log(answer);
}
