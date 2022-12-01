const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const count = Number(input[0]);
let cnt = 0;
let sum = 0;
while (cnt < count) {
  sum += Number(input[1][cnt]);
  cnt++;
}
console.log(sum);
