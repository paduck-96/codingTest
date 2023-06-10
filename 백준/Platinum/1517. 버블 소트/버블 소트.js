const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./samples.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);
const ARR = input[1].split(" ").map(Number);
let sorted = Array(N);
let answer = 0n;

const MERGE = (low, high) => {
  if (low === high) return;
  let mid = Math.floor((low + high) / 2);
  MERGE(low, mid);
  MERGE(mid + 1, high);
  // 병합
  let i = low;
  let j = mid + 1;
  for (let k = low; k <= high; k++) {
    if (j > high || (i <= mid && ARR[i] <= ARR[j])) {
      sorted[k] = ARR[i++];
    } else {
      sorted[k] = ARR[j++];
      answer += BigInt(mid - i + 1);
    }
  }
  for (let k = low; k <= high; k++) {
    ARR[k] = sorted[k];
  }
};

MERGE(0, N - 1);
console.log(answer.toString());