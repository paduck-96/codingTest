const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./samples.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let N = parseInt(input[0]);
// 인출시간
let P = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let totalTime = 0;
let waitTime = [];

for (let i = 0; i < N; i++) {
  for (let j = 0; j <= i; j++) {
    waitTime.push(P[j]);
  }
  //총 시간
  totalTime += waitTime.reduce((a, b) => a + b);
  waitTime = [];
}

console.log(totalTime);