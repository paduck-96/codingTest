const fs = require("fs");
const input = fs.readFileSync("samples.txt").toString().trim().split("\n");
let N = Number(input.shift());
let arr = input.map((x) => +x);
let max = Math.max.apply(null, arr);
let arrange = new Array(max);
arrange.fill(0);
let answer = "";
for (let i = 0; i < N; i++) {
  arrange[arr[i] - 1]++;
}

for (let i = 0; i < arrange.length; i++) {
  if (arrange[i] !== 0) {
    for (let j = 0; j < arrange[i]; j++) {
      answer += i + 1 + "\n";
    }
  }
}
console.log(answer);
