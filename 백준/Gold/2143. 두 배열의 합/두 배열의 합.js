const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./samples.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const T = parseInt(input[0]); // 주어진 합
const n = Number(input[1]); // A 배열의 길이
const A = input[2].split(" ").map(Number); // A 배열
const m = Number(input[3]); // B 배열의 길이
const B = input[4].split(" ").map(Number); // B 배열

const A_sums = [];
const B_sums = [];

for (let i = 0; i < A.length; i++) {
  let sum = 0;
  for (let j = i; j < A.length; j++) {
    sum += A[j];
    A_sums.push(sum);
  }
}

for (let i = 0; i < B.length; i++) {
  let sum = 0;
  for (let j = i; j < B.length; j++) {
    sum += B[j];
    B_sums.push(sum);
  }
}

// 이분 탐색
A_sums.sort((a, b) => a - b);
B_sums.sort((a, b) => a - b);

let count = 0;
// 투포인터
let start = 0;
let end = B_sums.length - 1;

while (start < A_sums.length && end >= 0) {
  const sum = A_sums[start] + B_sums[end];
  if (sum === T) {
    let countA = 0;
    let countB = 0;
    const tempA = A_sums[start];
    const tempB = B_sums[end];

    while (A_sums[start] === tempA && start < A_sums.length) {
      start++;
      countA++;
    }
    while (B_sums[end] === tempB && end >= 0) {
      end--;
      countB++;
    }

    count += countA * countB;
  } else if (sum < T) {
    start++;
  } else {
    end--;
  }
}

console.log(count);