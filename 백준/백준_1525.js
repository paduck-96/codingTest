//변경 시작
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./samples.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const dir = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];
const start = input.reduce((prev, curr) => prev + curr.replace(/ /g, ""), "");
let visited = new Set();
let queue = [[start, start.indexOf("0"), 0]];
visited.add(start);

while (queue.length) {
  let [curr, z, cnt] = queue.shift();
  if (curr === "123456780") {
    console.log(cnt);
    return;
  }

  let x = Math.floor(z / 3);
  let y = z % 3;
  for (let i = 0; i < 4; i++) {
    let nx = x + dir[i][0];
    let ny = y + dir[i][1];
    // 이동 후 인덱스
    let nIndex = 3 * nx + ny;
    if (nx >= 0 && nx < 3 && ny >= 0 && ny < 3) {
      let temp = curr.split("");
      // 이동할 위치와 현위치 변경
      [temp[z], temp[nIndex]] = [temp[nIndex], temp[z]];
      let next = temp.join("");
      if (!visited.has(next)) {
        visited.add(next);
        queue.push([next, nIndex, cnt + 1]);
      }
    }
  }
}

console.log(-1);

//변경 끝
