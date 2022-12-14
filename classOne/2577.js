const startTime = new Date().getTime();
const startMemory = process.memoryUsage().rss;
//변경 시작

const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((n) => Number(n));
const [first, second, third] = input;
let total = "";
total += first * second * third;

let result = {
  0: 0,
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  7: 0,
  8: 0,
  9: 0,
};

let index = 0;
let totalLength = total.length;
let check = Object.keys(result);
while (index < totalLength) {
  for (let sequence = 0; sequence < 10; sequence++) {
    if (check[sequence] == total[index]) {
      result[sequence] += 1;
    }
  }
  index++;
}
console.log(Object.values(result).join("\n"));

//변경 끝
const endTime = new Date().getTime();
const endMemory = process.memoryUsage().rss;
console.log(`걸린 시간 : ${endTime - startTime}ms`);
console.log(`사용 메모리 : ${endMemory - startMemory}`);
