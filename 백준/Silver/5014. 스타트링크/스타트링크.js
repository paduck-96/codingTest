const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./samples.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

let [F, S, G, U, D] = input.map(Number);

const visited = new Array(F + 1).fill(false);
const queue = [[S, 0]];
visited[S] = true;

while (queue.length > 0) {
  let [current, count] = queue.shift();

  if (current === G) {
    console.log(count);
    return;
  }

  if (current + U <= F && !visited[current + U]) {
    queue.push([current + U, count + 1]);
    visited[current + U] = true;
  }

  if (current - D >= 1 && !visited[current - D]) {
    queue.push([current - D, count + 1]);
    visited[current - D] = true;
  }
}

console.log("use the stairs");