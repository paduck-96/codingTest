const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./samples.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const PRIME = (n) => {
  const array = new Array(n + 1).fill(true);
  array[0] = array[1] = false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (array[i]) {
      for (let j = i * i; j <= n; j += i) {
        array[j] = false;
      }
    }
  }
  return array;
};

const bfs = (begin, target, isPrime) => {
  const queue = [[begin, 0]];
  const visited = {};

  while (queue.length) {
    const [current, count] = queue.shift();
    if (current === target) return count;

    // 4자릿수
    const currentArr = current.split("");

    for (let i = 0; i < 4; i++) {
      for (let j = 0; j <= 9; j++) {
        // 0xxx 제외
        if (i === 0 && j === 0) continue;
        const newNum = [...currentArr];
        newNum[i] = j.toString();
        const newNumStr = newNum.join("");

        if (isPrime[newNumStr] && !visited[newNumStr]) {
          queue.push([newNumStr, count + 1]);
          visited[newNumStr] = true;
        }
      }
    }
  }
  return "Impossible";
};

// 탐색
const T = input.shift();
const isPrime = PRIME(9999);

for (let i = 0; i < T; i++) {
  const [begin, target] = input[i].split(" ");
  console.log(bfs(begin, target, isPrime));
}