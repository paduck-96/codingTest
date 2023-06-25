const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./samples.txt";
const [N, K] = fs.readFileSync(filePath).toString().trim().split(" ");

const MAX = 100001;
const visited = Array(MAX).fill(0);

const bfs = () => {
  const queue = [Number(N)];

  while (queue.length) {
    const nowPos = queue.shift();

    if (nowPos === Number(K)) {
      return visited[nowPos];
    }

    /**
     * 각 경우 검사
     * +1, -1, *2
     */
    [nowPos - 1, nowPos + 1, nowPos * 2].forEach((nextPos) => {
      if (nextPos >= 0 && nextPos < MAX && !visited[nextPos]) {
        visited[nextPos] = visited[nowPos] + 1;
        queue.push(nextPos);
      }
    });
  }
};

console.log(bfs());