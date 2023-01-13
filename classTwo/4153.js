const fs = require("fs");
const input = fs.readFileSync("sample.txt").toString().trim().split("\n");
const result = [];

let start = 0;
let end = input.length - 1;
while (start < end) {
  let arr = input[start].split(" ").sort((a, b) => b - a);
  arr = arr.map((el) => el * el);
  if (arr[0] !== arr[1] + arr[2]) {
    result.push("wrong");
  } else {
    result.push("right");
  }
  start++;
}
console.log(result.join("\n"));
