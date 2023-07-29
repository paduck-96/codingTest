const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./samples.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const T = Number(input.shift());
const cmd = ["D", "S", "L", "R"];
const dx = [
  (x) => (x * 2) % 10000,
  (x) => (x - 1 < 0 ? 9999 : x - 1),
  (x) => (x % 1000) * 10 + Math.floor(x / 1000),
  (x) => Math.floor(x / 10) + (x % 10) * 1000,
];

for (let i = 0; i < T; i++) {
  let [A, B] = input[i].split(" ").map(Number);
  let queue = [[A, ""]];
  let visited = Array(10000).fill(false);
  visited[A] = true;

  while (true) {
    let [n, c] = queue.shift();
    if (n === B) {
      console.log(c);
      break;
    }
    for (let i = 0; i < 4; i++) {
      let nn = dx[i](n);
      if (visited[nn]) continue;
      visited[nn] = true;
      queue.push([nn, c + cmd[i]]);
    }
  }
}