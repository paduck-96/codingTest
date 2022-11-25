const fs = require("fs");
const input = fs
  .readFileSync("./sample.txt")
  .toString()
  .trim()
  .split("\n")
  .map((n) => Number(n));

let time = 0;
const result = [];
while (time < input.length) {
  if (time == 0) result.push(input[time] % 42);
  if (!result.includes(input[time] % 42)) result.push(input[time] % 42);
  time++;
}
console.log(result.length);
