const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./samples.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, S] = input.shift().split(" ").map(Number);
const arr = input[0].split(" ").map(Number);

let count = 0;

const dfs = (index, sum) => {
  if (index === N) return;

  if (sum + arr[index] === S) {
    count++;
  }

  //현재 값 미포함
  dfs(index + 1, sum);
  //현재 값 포함
  dfs(index + 1, sum + arr[index]);
};

dfs(0, 0);

console.log(count);