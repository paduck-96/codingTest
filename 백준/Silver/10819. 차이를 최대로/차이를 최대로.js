const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./samples.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
const numbers = input[1].split(" ").map(Number);

const visited = new Array(n).fill(false);
const output = [];
let max = 0;

// 순열 생성
const permute = (cnt) => {
  if (cnt === n) {
    let sum = 0;
    for (let i = 0; i < n - 1; i++) {
      sum += Math.abs(output[i] - output[i + 1]);
    }
    max = Math.max(max, sum);
    return;
  }

  for (let i = 0; i < n; i++) {
    if (visited[i] === false) {
      // 미방문
      visited[i] = true;
      output.push(numbers[i]);
      permute(cnt + 1);
      visited[i] = false;
      output.pop();
    }
  }
};

permute(0);
console.log(max);