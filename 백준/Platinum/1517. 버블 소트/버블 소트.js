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
    // j>high 면 이미 정렬된 상태로 순서대로 삽입
    // arri<arrj 면 순서대로 삽입
    if (j > high || (i <= mid && ARR[i] <= ARR[j])) {
      sorted[k] = ARR[i++];
    } else {
      // swap
      sorted[k] = ARR[j++];
      // arrj 뒤로 이동
      answer += BigInt(mid - i + 1);
    }
  }
  // 정렬 반영
  for (let k = low; k <= high; k++) {
    ARR[k] = sorted[k];
  }
};

MERGE(0, N - 1);
console.log(answer.toString());