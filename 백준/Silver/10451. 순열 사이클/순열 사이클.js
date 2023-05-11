const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./samples.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const TESTCASE = Number(input[0]);
let line = 1;

for (let i = 0; i < TESTCASE; i++) {
  const END = Number(input[line++]);
  let array = [0].concat(input[line++].split(" ").map(Number));
  let visited = Array(END + 1).fill(false);
  let count = 0;

  const DFS = (idx) => {
    visited[idx] = true;

    if (!visited[array[idx]]) {
      DFS(array[idx]);
    }
  };

  for (let j = 1; j <= END; j++) {
    if (!visited[j]) {
      DFS(j);
      count++;
    }
  }

  console.log(count);
}