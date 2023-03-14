const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./samples.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, m] = input.shift().split(' ').map(Number);
const set = new Set(input.slice(0, n));
const targets = input.slice(n);

let count = 0;
for (const target of targets) {
  if (set.has(target)) {
    count++;
  }
}

console.log(count);