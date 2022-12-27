const fs = require("fs");
const input = fs.readFileSync("sample.txt").toString().trim().split("\n");
const lengths = Number(input.shift());
const primaryArr = input
  .shift()
  .split(" ")
  .map((n) => Number(n));
// 1은 소수가 아니고 이를 포함하는 객체 생성
const notPrime = { 1: true };
// 아리스토텔리스의 체 사용
//전체 반복 범위를 가장 큰 값의 루트까지만 진행해도 무관
//배수는 소수가 아니기 때문
let checkNum = 2;
let maxNum = Math.max(...primaryArr);
let maxSqrt = Math.ceil(Math.sqrt(maxNum));
while (checkNum <= maxSqrt) {
  if (notPrime[checkNum]) continue;

  //원래의 범위까지 현재 수의 배수들은 다 소수가 아님
  //소수 아님을 적용하는 부분
  let primeChk = checkNum ** 2;
  while (primeChk <= maxNum) {
    notPrime[primeChk] = true;
    primeChk += checkNum;
  }
  checkNum++;
}

const result = [];
let resultChk = 0;
while (resultChk < lengths) {
  if (!notPrime[primaryArr[resultChk]]) result.push(primaryArr[resultChk]);
  resultChk++;
}
console.log(result.length);
