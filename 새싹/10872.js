const fs = require("fs");
const input = Number(fs.readFileSync("/dev/stdin").toString().trim());

let startNum = 1;
let result = 1;
while (startNum <= input) {
  result *= startNum;
  startNum++;
}
console.log(result);
