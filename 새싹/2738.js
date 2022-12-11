const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const size = Number(input[0].split(" ")[0]);
const count = Number(input[0].split(" ")[1]);
const matrixA = [];
const matrixB = [];

for (let i = 1; i <= size; i++) {
  matrixA.push(input[i].split(" ").map((n) => Number(n)));
  matrixB.push(input[i + size].split(" ").map((n) => Number(n)));
}

for (let i = 0; i < size; i++) {
  let check = [];
  for (let j = 0; j < count; j++) {
    check.push(matrixA[i][j] + matrixB[i][j]);
  }
  console.log(check.join(" "));
}
