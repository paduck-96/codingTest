const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./samples.txt";
const [TESTCASE, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const [DOT, LINE] = TESTCASE.split(" ").map((n) => Number(n));
let answer = 0;

// 구조 선언
let graph = [];
let visited = Array.from({ length: DOT + 1 }).fill(false);

// 정점 수 만큼 배열 생성
for (let i = 1; i <= DOT; i++) {
  graph[i] = [];
}

// 정점의 방문 여부 표시
for (let i = 0; i < input.length; i++) {
  const [START, END] = input[i].split(" ").map((n) => Number(n));
  graph[START].push(END);
  graph[END].push(START);
}

// dfs
const DFS = (dot) => {
  if (visited[dot] === true) return;
  visited[dot] = true;
  for (let i = 0; i < graph[dot].length; i++) {
    if (visited[graph[dot][i]] === false) {
      DFS(graph[dot][i]);
    }
  }
};

for (let i = 1; i <= DOT; i++) {
  if (!visited[i]) {
    DFS(i);
    answer++;
  }
}

console.log(answer);