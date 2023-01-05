const fs = require("fs");
const input = Number(fs.readFileSync("/dev/stdin").toString().trim());

// 지나는 횟수가 증가하는 경계의 시작 값 모으기
let count = 2;
let start = 2;
let startNum = [0, 1];
while (start <= input) {
  startNum.push(start);
  start = start + 6 * (count - 1);
  count++;
}

let end = startNum.length - 1;
let check = 1;
let result = 0;
while (check <= end) {
  if (startNum[check] === input) {
    result = check;
    break;
  }
  if (startNum[check] < input && startNum[check + 1] > input) {
    result = check;
    break;
  }
  if (startNum[check + 1] === undefined) {
    result = check;
    break;
  }

  check++;
}
console.log(result);
