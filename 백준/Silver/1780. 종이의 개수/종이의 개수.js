const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./samples.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

// 구조 잡기
const LINE = Number(input.shift());
const PAPER = input.map((value) => value.split(" ").map(Number));
let result = Array(3).fill(0);

//재귀 탐색
const SOLVE = (x, y, n) => {
  let check = PAPER[x][y];
  for (let i = x; i < x + n; i++) {
    for (let j = y; j < y + n; j++) {
      if (check !== PAPER[i][j]) {
        for (let a = 0; a < 3; a++) {
          for (let b = 0; b < 3; b++) {
            SOLVE(x + (a * n) / 3, y + (b * n) / 3, n / 3);
          }
        }
        return;
      }
    }
  }
  result[check + 1]++;
};

SOLVE(0, 0, LINE);
console.log(result.join("\n"));