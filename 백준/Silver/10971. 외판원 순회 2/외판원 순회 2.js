const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./samples.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);
const W = input.slice(1).map((v) => v.split(" ").map(Number));
let visited = new Array(N).fill(false);
let answer = Infinity;

const dfs = (start, now, count, sum) => {
  if (count === N && start === now) {
    answer = Math.min(answer, sum);
    return;
  }

  for (let i = 0; i < N; i++) {
    if (W[now][i] !== 0 && !visited[i]) {
      visited[i] = true;
      dfs(start, i, count + 1, sum + W[now][i]);
      visited[i] = false;
    }
  }
};

for (let i = 0; i < N; i++) {
  dfs(i, i, 0, 0);
}

console.log(answer);