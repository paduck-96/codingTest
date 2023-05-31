const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./samples.txt";
const input = Number(fs.readFileSync(filePath).toString().trim().split("\n"));

let result = "";

const HANOI = (n, a, b, c) => {
  if (n === 1) {
    result += `${a} ${c}\n`;
    return;
  }

  HANOI(n - 1, a, c, b);
  result += `${a} ${c}\n`;
  HANOI(n - 1, b, a, c);
};

console.log(2 ** input - 1);
HANOI(input, 1, 2, 3);
console.log(result.trim());