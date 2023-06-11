const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./samples.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let [N, K] = input[0].split(" ").map(Number);
let coins = input.slice(1).map(Number);
let count = 0;

for (let i = N - 1; i >= 0; i--) {
  if (K === 0) break;
  if (coins[i] > K) continue;
  count += Math.floor(K / coins[i]);
  K %= coins[i];
}

console.log(count);