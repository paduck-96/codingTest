const fs = require("fs");
const [N, K] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((n) => Number(n));
const result = [];
const arr = new Array();
let arrStart = 1;
while (arrStart <= N) {
  arr.push(arrStart);
  arrStart++;
}
let qStart = 0;
while (qStart < N) {
  let idxStart = 1;
  while (idxStart <= K) {
    if (idxStart == K) {
      result.push(arr.shift());
    } else {
      arr.push(arr.shift());
    }
    idxStart++;
  }
  qStart++;
}
console.log("<" + result.join(", ") + ">");
