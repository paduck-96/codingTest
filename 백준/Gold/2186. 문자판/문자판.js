const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./samples.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let [N, M, K] = input.shift().split(" ").map(Number);
let L = input.pop();
let grid = input.map((line) => line.split(""));
// 결과값 저장 배열
let dp = Array.from(Array(N), () =>
  Array.from(Array(M), () => Array(L.length).fill(-1))
);
let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];

const solve = (x, y, index) => {
  // letter counts
  if (dp[x][y][index] !== -1) return dp[x][y][index];

  if (index == L.length - 1) return 1;

  dp[x][y][index] = 0;

  //dfs
  for (let dir = 0; dir < 4; dir++) {
    for (let k = 1; k <= K; k++) {
      let nx = x + dx[dir] * k;
      let ny = y + dy[dir] * k;
      // 범위 만족 + 다음 글자
      if (
        0 <= nx &&
        nx < N &&
        0 <= ny &&
        ny < M &&
        grid[nx][ny] === L[index + 1]
      ) {
        // dp
        dp[x][y][index] += solve(nx, ny, index + 1);
      }
    }
  }

  return dp[x][y][index];
};

let answer = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (grid[i][j] === L[0]) answer += solve(i, j, 0);
  }
}

console.log(answer);