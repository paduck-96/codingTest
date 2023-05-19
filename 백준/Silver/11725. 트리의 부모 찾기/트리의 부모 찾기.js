const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./samples.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const NODES = Number(input[0]);

// 그래프 만들기
const GRAPH = {};
for (let i = 1; i < NODES; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  if (!GRAPH[a]) GRAPH[a] = [];
  if (!GRAPH[b]) GRAPH[b] = [];
  GRAPH[a].push(b);
  GRAPH[b].push(a);
}

const PARENT = {};
const visited = {};
let queue = [1];
let head = 0;

//dfs 시간 초과
//bfs로 변경
visited[1] = true;
while (head < queue.length) {
  const node = queue[head++];
  for (const nextNode of GRAPH[node]) {
    if (!visited[nextNode]) {
      visited[nextNode] = true;
      PARENT[nextNode] = node;
      queue.push(nextNode);
    }
  }
}

let result = "";
for (let i = 2; i <= NODES; i++) {
  result += PARENT[i] + "\n";
}

console.log(result);