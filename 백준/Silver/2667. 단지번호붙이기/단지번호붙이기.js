const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./samples.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const SIZE = Number(input[0]);
const MAP = input.slice(1).map((line) => line.split("").map(Number));

// 구조
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];
let visited = Array.from(Array(SIZE), () => Array(SIZE).fill(false));
let count = [];

const DFS = (x, y) => {
  visited[x][y] = true;
  let houses = 1;

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx >= 0 && ny >= 0 && nx < SIZE && ny < SIZE) {
      if (MAP[nx][ny] === 1 && !visited[nx][ny]) {
        houses += DFS(nx, ny);
      }
    }
  }

  return houses;
};

// 방문 로직
for (let i = 0; i < SIZE; i++) {
  for (let j = 0; j < SIZE; j++) {
    if (MAP[i][j] === 1 && !visited[i][j]) {
      count.push(DFS(i, j));
    }
  }
}

// 결론 도출
count.sort((a, b) => a - b);

console.log(count.length);
count.forEach((v) => console.log(v));