const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./samples.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

// 구조 설계
const NODES = Number(input[0]);
const GRAPH = Array.from({ length: NODES + 1 }, () => []);

for (let i = 1; i < NODES; i++) {
  const [parent, child, weight] = input[i].split(" ").map(Number);
  GRAPH[parent].push([child, weight]);
  GRAPH[child].push([parent, weight]);
}

// bfs
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

const firstBFS = BFS(1);
const secondBFS = BFS(firstBFS.maxNode);

console.log(secondBFS.maxDist);