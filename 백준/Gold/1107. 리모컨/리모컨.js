const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./samples.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let target = Number(input[0]);
let brokenCount = Number(input[1]);
let broken = input[2] ? input[2].split(" ").map(Number) : [];
let min = Math.abs(target - 100);

for (let i = 0; i <= 1000000; i++) {
  let str = String(i);
  let possible = true;

  for (let j = 0; j < str.length; j++) {
    if (broken.includes(Number(str[j]))) {
      possible = false;
      break;
    }
  }

  if (possible) {
    let len = str.length + Math.abs(target - i);
    min = Math.min(min, len);
  }
}

console.log(min);