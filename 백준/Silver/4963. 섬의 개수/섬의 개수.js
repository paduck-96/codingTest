const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./samples.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
// 줄 마다 정보 변경
let idx = 0;

while (idx < input.length - 1) {
  // 테케별 구조
  const [WIDTH, HEIGHT] = input[idx++].split(" ").map(Number);
  const MAP = Array.from(Array(HEIGHT), () => Array(WIDTH).fill(0));
  //각 줄, 각 행
  for (let i = 0; i < HEIGHT; i++) {
    MAP[i] = input[idx++].split(" ").map(Number);
  }

  let count = 0;
  let visited = Array.from(Array(HEIGHT), () => Array(WIDTH).fill(false));
  const dx = [-1, 0, 1, 0, -1, -1, 1, 1]; //대각 가능
  const dy = [0, 1, 0, -1, -1, 1, -1, 1];

  const DFS = (x, y) => {
    visited[x][y] = true;

    for (let i = 0; i < 8; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx >= 0 && ny >= 0 && nx < HEIGHT && ny < WIDTH) {
        if (MAP[nx][ny] === 1 && !visited[nx][ny]) {
          DFS(nx, ny);
        }
      }
    }
  };

  // 섬 탐색
  for (let i = 0; i < HEIGHT; i++) {
    for (let j = 0; j < WIDTH; j++) {
      if (MAP[i][j] === 1 && !visited[i][j]) {
        DFS(i, j);
        count++;
      }
    }
  }

  console.log(count);
}