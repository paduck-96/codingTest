const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./samples.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [n, m, v] = input[0].split(' ').map(Number);
const graph = Array.from(Array(n + 1), () => []);

for (let i = 1; i <= m; i++) {
  const [a, b] = input[i].split(' ').map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

const dfs = (start ) => {
  const stack = [start];
  const visited = Array.from({length:n+1}).fill(false);
  const result = [];
  while(stack.length){
    let temp = stack.pop();
    if(!visited[temp]){
      visited[temp] = true;
      result.push(temp);
      stack.push(...graph[temp])
    }
  }
  return result.join(" ");
};

const bfs = (start)=>{
  const queue = [start];
  const visited = Array.from({length:n+1}).fill(false);
  const result = [];
  while(queue.length){
    let temp = queue.shift();
    if(!visited[temp]){
      visited[temp] = true;
      result.push(temp);
      queue.push(...graph[temp]);
    }
  }
  return result.join(" ");
}

graph.forEach(v => v.sort((a, b) => b - a));
console.log(dfs(v));

graph.forEach(v => v.sort((a, b) => a - b));
console.log(bfs(v));