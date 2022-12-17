// 입력 받아오기
const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(n=>Number(n));
// 변수 구분하기
const [x,y,w,h] = input;

// 최단 거리로 경계선으로 가는 방법은
//(x,y)만큼 되돌어가거나
//(w,h)에서 (x,y)를 뺀 만큼 더 가거나
const answer = [];
answer.push(x);
answer.push(y);
answer.push(w-x);
answer.push(h-y);

// 결과 출력
console.log(Math.min.apply(null, answer))