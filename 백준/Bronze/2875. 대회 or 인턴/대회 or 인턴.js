const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./samples.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

const N = parseInt(input[0]);
const M = parseInt(input[1]);
const K = parseInt(input[2]);

let team = Math.min(Math.floor(N / 2), M);
// 남은 학생
let rest = N + M - team * 3;

if (rest < K) {
  team -= Math.ceil((K - rest) / 3);
}

console.log(team);