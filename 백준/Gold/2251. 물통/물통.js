const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./samples.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

const [A, B, C] = input.map(Number);

// 방문 여부
// C = X - A - B
let visited = new Array(201);
for (let i = 0; i < 201; i++) {
  visited[i] = new Array(201).fill(false);
}
// C를 옮길 수 있는지
let answer = new Array(201).fill(false);

const bfs = () => {
  // C로 부터 이동
  let queue = [[0, 0, C]];
  visited[0][0] = true;
  answer[C] = true;

  while (queue.length) {
    const [a, b, c] = queue.shift();
    const sums = [a, b, c];

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (i === j) continue;
        const next = sums.slice();
        // 물통 이동
        next[j] += next[i];
        next[i] = 0;

        // 초과시
        if (next[j] >= [A, B, C][j]) {
          next[i] = next[j] - [A, B, C][j];
          next[j] = [A, B, C][j];
        }

        if (!visited[next[0]][next[1]]) {
          visited[next[0]][next[1]] = true;
          queue.push(next);
          if (next[0] === 0) {
            answer[next[2]] = true;
          }
        }
      }
    }
  }
};

bfs();

let result = [];
for (let i = 0; i < 201; i++) {
  if (answer[i]) result.push(i);
}
console.log(result.join(" "));