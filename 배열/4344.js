const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const testCase = Number(input[0]);
let total = 0;
let avg = 0;
let result = [];

let cases = 1;
while (cases <= testCase) {
  let number = input[cases].split(" ").map((n) => Number(n));
  for (let i = 1; i <= number[0]; i++) {
    total += number[i];
  }
  let cnt = 0;
  avg = total / number[0];
  for (let j = 1; j <= number[0]; j++) {
    if (number[j] > avg) cnt++;
  }
  avg = ((cnt * 100) / number[0]).toFixed(3);
  result.push(avg + "%");
  total = 0;
  avg = 0;
  cases++;
}
console.log(result.join("\n"));
