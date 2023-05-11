const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./samples.txt";
const [NUMBER, HOP] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let seq = [NUMBER];
let visited = Array.from({ length: 100000 }).fill(0);
visited[NUMBER] = 1;

// 반복
while (true) {
  // 반복 과 확인 초기화
  //처음 값이 문자열이라 찾을 수 없어 숫자로 저장 후 변환
  let lastNum = String(seq[seq.length - 1]);
  let checkNum = 0;

  // 가장 마지막 숫자에 대해 각 자리수 제곱 값 구하기
  while (lastNum) {
    checkNum += Math.pow(lastNum % 10, HOP);
    lastNum = Math.floor(lastNum / 10);
  }

  // 중복 여부 확인
  if (visited[checkNum] === 1) {
    console.log(seq.indexOf(checkNum));
    break;
  } else {
    seq.push(checkNum);
    visited[checkNum] = 1;
  }
}