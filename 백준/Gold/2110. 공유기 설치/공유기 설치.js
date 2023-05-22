const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./samples.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, C] = input[0].split(" ").map(Number);
const house = input
  .slice(1)
  .map(Number)
  .sort((a, b) => a - b);

let start = 1; // 가능한 최소 거리
let end = house[N - 1] - house[0]; // 가능한 최대 거리

let result = 0;

while (start <= end) {
  let mid = Math.floor((start + end) / 2); // 중간 거리
  let value = house[0]; // 첫째 집에는 무조건 공유기를 설치
  let count = 1; // 설치된 공유기의 수

  // 현재의 mid 값을 이용해 공유기 설치
  for (let i = 1; i < N; i++) {
    if (house[i] >= value + mid) {
      value = house[i];
      count++;
    }
  }

  if (count >= C) {
    // C개 이상의 공유기를 설치할 수 있는 경우
    start = mid + 1;
    result = mid; // 최대 값을 저장
  } else {
    // C개 이상의 공유기를 설치할 수 없는 경우
    end = mid - 1;
  }
}

console.log(result);