const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./samples.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const LEN = Number(input[0]);

// 구조 설게
const MAP = input.slice(1).map((row) => row.split(" ").map(Number));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

let islandNum = 1;
let minDist = Infinity;

// 전체 탐색하여 섬 구분
for (let i = 0; i < LEN; i++) {
  for (let j = 0; j < LEN; j++) {
    // 한 번도 방문 안했을 때 + 섬
    //연결된 섬 탐색
    if (MAP[i][j] === 1) {
      islandNum++;
      MAP[i][j] = islandNum;
      // bfs
      const queue = [[i, j]];
      while (queue.length > 0) {
        const [x, y] = queue.shift();
        for (let k = 0; k < 4; k++) {
          const nx = x + dx[k];
          const ny = y + dy[k];

          if (nx >= 0 && nx < LEN && ny >= 0 && ny < LEN && MAP[nx][ny] === 1) {
            MAP[nx][ny] = islandNum;
            queue.push([nx, ny]);
          }
        }
      }
    }
  }
}

// 섬 별로 아무 위치에서 다른 섬 까지 거리 탐색
for (let i = 0; i < LEN; i++) {
  for (let j = 0; j < LEN; j++) {
    // 섬으로 등록된 곳이라면 0(거리) 와 함께 탐색
    if (MAP[i][j] > 1) {
      const queue = [[i, j, 0]];
      const visited = Array.from({ length: LEN }, () => Array(LEN).fill(false));
      visited[i][j] = true;
      //bfs
      while (queue.length > 0) {
        const [x, y, dist] = queue.shift();
        for (let k = 0; k < 4; k++) {
          const nx = x + dx[k];
          const ny = y + dy[k];
          if (nx >= 0 && nx < LEN && ny >= 0 && ny < LEN && !visited[nx][ny]) {
            visited[nx][ny] = true;
            //바다일 경우에만 이동(섬 끼리)
            if (MAP[nx][ny] === 0) {
              queue.push([nx, ny, dist + 1]);
            } // 다른 섬에 도착했다면
            else if (MAP[nx][ny] !== MAP[i][j]) {
              minDist = Math.min(minDist, dist);
            }
          }
        }
      }
    }
  }
}

console.log(minDist);