const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./samples.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let N = parseInt(input[0]);
let meetings = [];
// 회의정보 저장
for (let i = 1; i <= N; i++) {
  meetings.push(input[i].split(" ").map(Number));
}
//정보 정렬
meetings.sort((a, b) => a[1] - b[1] || a[0] - b[0]);

let end = meetings[0][1];
let count = 1;

// 회의 배정
for (let i = 1; i < N; i++) {
  // 끝난 이후에만
  if (meetings[i][0] >= end) {
    count++;
    end = meetings[i][1];
  }
}

console.log(count);