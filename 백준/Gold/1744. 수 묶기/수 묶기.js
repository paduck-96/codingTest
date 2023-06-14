const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./samples.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let N = Number(input[0]);
let numbers = input.slice(1).map(Number);

/**
 * 음수끼리 곱하면 양수
 * 양수끼리 곱하면 더 큰 값
 * 0이 있다면 음수로 빼야 큰 값(-없어지니까)
 * 1은 그대로니까 제외
 */
let negatives = numbers.filter((number) => number <= 0).sort((a, b) => a - b);
let positives = numbers.filter((number) => number > 1).sort((a, b) => b - a);

let result = 0;

while (negatives.length > 1) {
  result += negatives.shift() * negatives.shift();
}
while (positives.length > 1) {
  result += positives.shift() * positives.shift();
}

result += negatives
  .concat(
    positives,
    numbers.filter((number) => number === 1)
  )
  .reduce((a, b) => a + b, 0);

// 결과를 출력합니다.
console.log(result);