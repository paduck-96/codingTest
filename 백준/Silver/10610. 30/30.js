const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./samples.txt";
const input = fs.readFileSync(filePath).toString().trim().split("");

// 주어진 숫자를 내림차순으로 정렬
input.sort((a, b) => b - a);

// 30의 배수는 3 의 배수 + 10의 배수
// 각 자릿수 합 3의 배수
// 끝자리 0
const sum = input.reduce((a, b) => a + parseInt(b), 0);
const zeroIncluded = input[input.length - 1] === "0";

if (sum % 3 === 0 && zeroIncluded) {
  console.log(input.join(""));
} else {
  console.log(-1);
}