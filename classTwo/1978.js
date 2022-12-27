const fs = require("fs");
const input = fs.readFileSync("sample.txt").toString().trim().split("\n");
const lengths = Number(input.shift());
const primaryArr = input
  .shift()
  .split(" ")
  .map((n) => Number(n));
// 소수 판별 함수
const primaryCheck = (n) => {
  // 1은 소수 아니라 바로 판별
  if (n == 1) {
    return false;
  }
  // 나머지 경우 구하기
  let check = 2;
  // 루트 값을 구해, 탐색 범위 줄이기
  //배수가 있으면 소수가 아니기 때문에 루트로 줄이기(인수 구하는 느낌)
  while (check <= Math.sqrt(n)) {
    // 구하려는 값을 check(인수?)로 나눴을 때
    //0이라면 당연히 소수가 아님(나누어 떨어진다는 건 배수이기 때문)
    if (n % check === 0) return false;
    check++;
  }
  return true;
};

// 결과 확인
//주어진 배열의 요소마다 소수인지 판별해 true 개수만 출력
let checkNum = 0;
let result = 0;
while (checkNum < lengths) {
  if (primaryCheck(primaryArr[checkNum])) {
    result++;
  }
  checkNum++;
}
console.log(result);
