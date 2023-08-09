const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./samples.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [R, C] = input[0].split(" ").map(Number);
const board = input.slice(1).map((line) => line.split(""));

let answer = 0;
const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];
const visited = Array(26).fill(false);

const dfs = (x, y, count) => {
  const current = board[x][y].charCodeAt(0) - "A".charCodeAt(0);

  if (visited[current]) return;
  visited[current] = true;
  answer = Math.max(answer, count);

  for (let dir = 0; dir < 4; dir++) {
    const nx = x + dx[dir];
    const ny = y + dy[dir];

    if (nx >= 0 && nx < R && ny >= 0 && ny < C) {
      dfs(nx, ny, count + 1);
    }
  }

  visited[current] = false;
};

dfs(0, 0, 1);
console.log(answer);