const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./samples.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const NODES = Number(input[0]);
// 구조 설계
const GRAPH = Array.from({ length: NODES + 1 }, () => []);

// 트리 구조 그리기
for (let i = 1; i <= NODES; i++) {
  const info = input[i].split(" ").map(Number);
  for (let j = 1; j < info.length - 1; j += 2) {
    GRAPH[info[0]].push([info[j], info[j + 1]]);
  }
}

//bfs
const BFS = (start) => {
  const visited = Array(NODES + 1).fill(false);
  const queue = [[start, 0]];
  let maxDist = 0;
  let maxNode = start;

  visited[start] = true;

  while (queue.length) {
    const [node, dist] = queue.shift();
    if (dist > maxDist) {
      maxDist = dist;
      maxNode = node;
    }
    for (const [nextNode, nextDist] of GRAPH[node]) {
      if (!visited[nextNode]) {
        visited[nextNode] = true;
        queue.push([nextNode, dist + nextDist]);
      }
    }
  }
  return { maxNode, maxDist };
};

// 임의 노드에서 가장 먼 노드
const firstBFS = BFS(1);
// 가장 먼 노드에서 가장 먼 노드
const secondBFS = BFS(firstBFS.maxNode);
// 결과
console.log(secondBFS.maxDist);