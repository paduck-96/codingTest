const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./samples.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [M, N] = input.shift().split(" ").map(Number);

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

const map = input.map((line) => line.split("").map(Number));
const bfs = () => {
  const queue = [];
  queue.sort((a, b) => a[2] - b[2]);

  const visited = Array.from({ length: N }, () => Array(M).fill(Infinity));
  visited[0][0] = 0;
  queue.push([0, 0, 0]);

  while (queue.length) {
    const [x, y, cost] = queue.shift();

    if (x === N - 1 && y === M - 1) {
      return cost;
    }

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (
        nx >= 0 &&
        ny >= 0 &&
        nx < N &&
        ny < M &&
        visited[nx][ny] > cost + map[nx][ny]
      ) {
        visited[nx][ny] = cost + map[nx][ny];
        queue.push([nx, ny, visited[nx][ny]]);
        queue.sort((a, b) => a[2] - b[2]);
      }
    }
  }
};

console.log(bfs());