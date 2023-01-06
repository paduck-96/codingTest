const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
const [A, B] = input.map((n) => Number(n));
const [sqrtA, sqrtB] = input.map((n) => Math.round(Math.sqrt(n)));

// 각 함수의 루트을 찾아서 나머지가 0이 되는 수를 구함
// 그 수와 그 수로 나눈 몫이 주어진 값의 약수
// 약수 배열을 비교해 가장 큰 공약수 찾기

const findNum = (original, sqrt) => {
  let check = 1;
  let result = [];
  while (check <= sqrt) {
    if (original % check === 0) {
      result.push(check, original / check);
    }
    check++;
  }
  return result;
};

let resultA = findNum(A, sqrtA);
let resultB = findNum(B, sqrtB);

let max = Math.max(...resultA.filter((el) => resultB.includes(el)));
let min = max * (A / max) * (B / max);
console.log(max + "\n" + min);
