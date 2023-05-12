const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./samples.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const TESTCASE = Number(input[0]);

let index = 1;
for (let i = 0; i < TESTCASE; i++) {
  const STUDENT = Number(input[index++]);
  let students = [0].concat(input[index++].split(" ").map(Number));
  let visited = Array(STUDENT + 1).fill(0); // 방문 배열
  let finished = Array(STUDENT + 1).fill(false); // 팀(사이클) 배열
  let count = 0;

  // dfs
  const DFS = (num) => {
    visited[num] = true;
    let next = students[num];

    if (!visited[next]) {
      DFS(next);
    } else {
      if (!finished[next]) {
        for (let i = next; i !== num; i = students[i]) {
          count++;
        }
        count++;
      }
    }
    finished[num] = true;
  };

  //
  for (let j = 1; j <= STUDENT; j++) {
    if (!visited[j]) DFS(j);
  }

  console.log(STUDENT - count);
}