const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./samples.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [WIDTH, HEIGHT] = input[0].split(" ").map(Number);

// 구조 설계
const BOX = input.slice(1).map((row) => row.split(" ").map(Number));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

//bfs
let queue = [];
let unripeTomatoes = 0;

// 토마토 탐색
for (let i = 0; i < HEIGHT; i++) {
  for (let j = 0; j < WIDTH; j++) {
    if (BOX[i][j] === 1) {
      queue.push([i, j]);
    } else if (BOX[i][j] === 0) {
      unripeTomatoes++;
    }
  }
}

//BFS
//shift 연산은 O(N)이기 때문에 개선 필요
const BFS = () => {
  let day = -1;
  //deque 개선
  let head = 0; //시작
  let tail = queue.length; //끝

  while (head < tail) {
    let len = tail - head; //현재 길이

    for (let l = 0; l < len; l++) {
      const [x, y] = queue[head++]; // 시작 뽑기

      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (nx >= 0 && ny >= 0 && nx < HEIGHT && ny < WIDTH) {
          if (BOX[nx][ny] === 0) {
            BOX[nx][ny] = 1;
            queue.push([nx, ny]); // 삽입
            unripeTomatoes--;
          }
        }
      }
    }

    tail = queue.length; //끝 최산화
    day++;
  }

  return day;
};

// 결론 도출
if (unripeTomatoes === 0) {
  console.log(0);
} else {
  let days = BFS();
  console.log(unripeTomatoes === 0 ? days : -1);
}