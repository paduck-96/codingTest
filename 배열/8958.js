const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const time = Number(input[0]);
let totalScore = 0;
let checkScore = 0;
let result = [];
let count = 1;
while (count <= time) {
  let aLength = input[count].length;
  for (let num = 0; num < aLength; num++) {
    if (input[count][num] === "O") {
      checkScore += 1;
    } else {
      checkScore = 0;
    }
    totalScore += checkScore;
  }
  count++;
  result.push(totalScore);
  totalScore = 0;
  checkScore = 0;
}
console.log(result.join("\n"));
