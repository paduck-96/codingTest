const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./samples.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let board = input.map((line) => line.split(" ").map(Number));
let blanks = [];
let result = [];
let isSolved = false;

//빈칸 위치 저장
for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    if (board[i][j] === 0) {
      blanks.push([i, j]);
    }
  }
}

// 중복 숫자 판별
const isPossible = (x, y, num) => {
  for (let i = 0; i < 9; i++) {
    if (board[x][i] === num || board[i][y] === num) return false;
  }
  // 3x3 중복 숫자 판별
  const startX = Math.floor(x / 3) * 3;
  const startY = Math.floor(y / 3) * 3;

  for (let i = startX; i < startX + 3; i++) {
    for (let j = startY; j < startY + 3; j++) {
      if (board[i][j] === num) return false;
    }
  }

  return true;
};

//빈 칸 배열 기준으로 탐색
const solve = (index) => {
  if (isSolved) return;

  if (index === blanks.length) {
    for (let i = 0; i < 9; i++) {
      result.push(board[i].join(" "));
    }
    isSolved = true;
    return;
  }

  const [x, y] = blanks[index];

  for (let i = 1; i <= 9; i++) {
    if (isPossible(x, y, i)) {
      board[x][y] = i;
      solve(index + 1);
      if (isSolved) return;
      board[x][y] = 0;
    }
  }
};

solve(0);
console.log(result.join("\n"));